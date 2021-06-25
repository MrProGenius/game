import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RegistoService } from 'src/app/services/registo.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  //Variaveis
  acaba: any;
  nome;
  idP;
  atk: number;
  isMonster;
  intl: number;
  vida: number;
  idPlayer;
  nomeInimigo;
  idPInimigo;
  atkInimigo: number = 0;
  isMonsterInimigo;
  intlInimigo: number = 0;
  vidaInimigo: number = 0;
  idPlayerInimigo;
  vidap1: number;
  aleatorio: number;

  constructor(private loginService: LoginService,private registo : RegistoService, private router: Router) {}

  ngOnInit(): void {
    this.start();
  }
// Chamar a minha personagem
  getPersonagem() {
    this.loginService.getPersonagem(this.loginService.id).subscribe((x) => {
      if (x['code'] == 200) {
        this.nome = x['data'].Personagens[0].Nome;
        this.idP = x['data'].Personagens[0].ID;
        this.registo.idChar = x['data'].Personagens[0].ID;
        this.atk = x['data'].Personagens[0].Atk;
        this.isMonster = x['data'].Personagens[0].IsMonset;
        this.intl = x['data'].Personagens[0].Int;
        this.vida = x['data'].Personagens[0].Vida;
        this.idPlayer = x['data'].Personagens[0].ID_Player;
      }
    });
  }
 // chamar a personagem rand
  getPersonagemRand() {
    this.loginService.getPersonagemRand().subscribe((x) => {
      if (x['code'] == 200) {
        this.nomeInimigo = x['data'].Nome;
        this.idPInimigo = x['data'].ID;
        this.atkInimigo = x['data'].Atk;
        this.isMonsterInimigo = x['data'].IsMonset;
        this.intlInimigo = x['data'].Int;
        this.vidaInimigo = x['data'].Vida;
        this.idPlayerInimigo = x['data'].ID_Player;
      }
    });
  }
 

  start() {
    this.getPersonagem();
    this.getPersonagemRand();
      setTimeout(() => {
      this.batalha();
    }, 2000);
  }
// calc
  tipoDano() {
    this.aleatorio = Math.floor(Math.random() * 11);
    if (this.aleatorio <= 5) {
      this.vidaInimigo = this.vidaInimigo - this.atk;
      if(this.vidaInimigo< 0){
        this.vidaInimigo = 0;
      }
      if (this.vidaInimigo <= 0) {
        clearInterval(this.acaba);
        setTimeout(() => {
          alert('Ganhou!');
          this.router.navigateByUrl('/menu');
        }, 500);
      
      }
      return 1;
    } else {
      this.vida = this.vida - this.atkInimigo;
      if(this.vida < 0){
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
  batalha() {
    this.acaba = setInterval(() => {
      this.tipoDano();
    }, 2000);
  }
}
