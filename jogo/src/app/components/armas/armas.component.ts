import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistoService } from 'src/app/services/registo.service';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.css'],
})
export class ArmasComponent implements OnInit {
  router: Router;
  constructor(private reg: RegistoService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {}
  //C
  criaArma(name, atk, durabilidade, tipo, vida) {
    this.reg.criaArma(name, atk, durabilidade, tipo, vida,this.reg.username, this.reg.password,this.reg.idChar).subscribe((x) => {
      if (x['code'] == 200) {
        setTimeout(() => {
          alert('Arma Criada !');
          this.router.navigateByUrl('/menu');
        }, 500);
        this.router.navigate(['/menu']);
        console.log(x);
        
      } else {
        alert('erro');
      }
    });
  }
}
