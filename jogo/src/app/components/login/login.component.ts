import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, router:Router) {this.router = router}
  ngOnInit(): void {}
  router: Router;
  // login
  login(user:any , pass:any) {
  this.loginService.login(user, pass).subscribe(
      (x) => {console.log(x['data']);}
      );
      // navegar entre componentes
      this.loginService.login(user, pass).subscribe((x) => {
        if (x['code'] == 200 ){
          localStorage.setItem('username',user)
          this.router.navigate(['/menu'])
          console.log(x);
          this.loginService.id = x['data'];


        } else{
          alert("Login Invalido")
        }

      }
      );
  }
}



