import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RegistoService } from 'src/app/services/registo.service';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.component.html',
  styleUrls: ['./treino.component.css'],
})
export class TreinoComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private reg: RegistoService
  ) {}

  //Variaveis
  acaba: any;
  nome;
  idP;
  atk: number = 0;
  isMonster;
  intl: number = 0;
  vida: number = 0;
  idPlayer;
  idPersonagem;
  username = localStorage.getItem('username')
  aleatorio: any;
  vidaMonster: number = 10;
  atkMonster: number = 10;
  ngOnInit(): void {
    this.AumentaLevel();
  }
  // vai buscar os dados do meu player
  getPersonagem() {
    this.loginService.getPersonagem(this.loginService.id).subscribe((x) => {
      if (x['code'] == 200) {
        this.nome = x['data'].Personagens[0].Nome;
        this.idP = x['data'].Personagens[0].ID;
        this.atk = parseInt(x['data'].Personagens[0].Atk);
        this.isMonster = x['data'].Personagens[0].IsMonset;
        this.intl = parseInt(x['data'].Personagens[0].Int);
        this.vida = parseInt( x['data'].Personagens[0].Vida);
        this.idPlayer = x['data'].Personagens[0].ID_Player;
      }
    });
  }
  AumentaLevel() {
    this.getPersonagem();
    setTimeout(() => {
      this.batalha();
    }, 2000);
  }

  tipoDano() {
    this.aleatorio = Math.floor(Math.random() * 11);
    if (this.aleatorio <= 5) {
      this.vidaMonster = this.vidaMonster - this.atk;
      if (this.vidaMonster < 0) {
        this.vidaMonster = 0;
      }
      if (this.vidaMonster <= 0) {
        clearInterval(this.acaba);
        setTimeout(() => {
          this.UpdateChar(
            this.idPersonagem,
            this.nome,
            this.atk += 1,
            this.isMonster,
            this.vida,          
            this.intl += 1,
            this.vida += 1,
          );
          alert('Ganhou!');
          console.log("entrou")
          this.router.navigateByUrl('/menu');
        }, 500);
      }
      return 1;
    } else {
      this.vida = this.vida - this.atkMonster;
      if (this.vida < 0) {
        this.vida = 0;
      }
      if (this.vida <= 0) {
        clearInterval(this.acaba);
        setTimeout(() => {
          alert('Perdeu!');
          this.router.navigateByUrl('/menu');
        }, 500);
      }
      return 2;
    }
  }
  password(idPersonagem: any, nome: any, arg2: number, isMonster: any, vida: number, password: any, arg6: number, arg7: number) {
    throw new Error('Method not implemented.');
  }
  batalha() {
    this.acaba = setInterval(() => {
      this.tipoDano();
    }, 2000);
  }
  UpdateChar(idPersonagem, nome, atk, intl, vida,username,password) {
    this.reg.updateChar(idPersonagem, nome, atk, intl, vida,username,password).subscribe((x) => {
      if (x['code'] == 200) {
        this.router.navigate(['/menu']);
        console.log(x);
      } else {
        alert('erro');
      }
    });
  }
}
