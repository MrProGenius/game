import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegistoService } from './registo.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private registo: RegistoService, router:Router) {
    this.router = router;
  }
router: Router;
  linkLogin: string = "http://moreiramoises.pt/server/apis/login.php";
  linkGetPersonagem: string = "http://moreiramoises.pt/server/apis/get/getChar.php";
  getPersonRandom: string = "http://moreiramoises.pt/server/apis/get/getRandomChar.php?"

  id: number;

  login(user:any, pass:any){
    let bodyData: FormData = new FormData();
    bodyData.append("username", user);
    bodyData.append("password", pass);

    return this.http.post(this.linkLogin, bodyData);
  }
  
  getPersonagem(id) {
    return this.http.get(this.linkGetPersonagem,  {
      params:{'PlayerID': id}
    
    });

}
getPersonagemRand() {
  return this.http.get(this.getPersonRandom);
}
}
