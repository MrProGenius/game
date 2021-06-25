import { Component, OnInit } from '@angular/core';
import { RegistoService } from 'src/app/services/registo.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css'],
})
export class RegistoComponent implements OnInit {
  constructor(
    private reg: RegistoService,
    router: Router,
    private Login: LoginService
  ) {
    this.router = router;
  }
  registar(user, password) {
    this.reg.registo(user, password).subscribe((data) => {
      console.log(data);
      this.reg.username = user;
      this.reg.password = password;
      this.Login.id = data['data'];
    });
  }

  router: Router;
  ngOnInit(): void {}
  criarPersonagem(nome, atk, intl, vida) {
    this.reg
      .criarPersonagem(
        nome,
        atk,
        intl,
        vida,
        this.reg.username,
        this.reg.password
      )
      .subscribe((x) => {
        console.log(this.reg.username, this.reg.password);
        if (x['code'] == 200) {
          alert('Registo Criado com sucesso efetue login');
          this.router.navigate(['/login']);
          console.log(x);
        } else {
          alert('erro');
        }
      });
  }
}
