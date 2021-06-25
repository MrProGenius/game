import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistoService {
  //variaveis 
  username : any;
  password: any;
  idChar: any;
  // Links da API
  link = 'http://moreiramoises.pt/server/apis/signup.php';
  link2 = 'http://moreiramoises.pt/server/apis/createChart.php';
  link3 = 'http://moreiramoises.pt/server/apis/createArma.php';
  link4 = 'http://moreiramoises.pt/server/apis/updateChart.php';

  constructor(private http: HttpClient) {}
// funcao para criar o registo
  registo(nome: any, pass: any) {
    let datToSend: FormData = new FormData();
    datToSend.append('username', nome);
    datToSend.append('password', pass);
    return this.http.post(this.link, datToSend);
  }
  // funcao para criar a personagem
  criarPersonagem(nome, atk, intl, vida,user,password) {
    let datToSend: FormData = new FormData();
    datToSend.append('name', nome);
    datToSend.append('atk', atk);
    datToSend.append('isMonster', 'false');
    datToSend.append('int', intl);
    datToSend.append('vida', vida);
    datToSend.append('username', user);
    datToSend.append('password', password);

   return this.http.post(this.link2, datToSend);
   
  }
  // funcao para criar arma
  criaArma(name, atk, durabilidade, tipo, vida,username, password, idPersonagem) {
    let data: FormData = new FormData();
    data.append('name', name);
    data.append('atk', atk);
    data.append('durabilidade', durabilidade);
    data.append('tipoDeArma', tipo);
    data.append('vida', vida);
    data.append('username', username);
    data.append('password', password);
    data.append('idPersonagem', idPersonagem);
    return this.http.post(this.link3, data);
  }
  // funcao para fazer update a personagem
  updateChar(idPersonagem, nome, atk, intl,vida, username, password) {
    console.log(atk);
    let datToSend: FormData = new FormData();
    datToSend.append('idChar', idPersonagem);
    datToSend.append('name', nome);
    datToSend.append('atk', atk);
    datToSend.append('isMonster', 'false');
    datToSend.append('int', intl);
    datToSend.append('vida', vida);
    datToSend.append('username', username);
    datToSend.append('password', password);

    return this.http.post(this.link4, datToSend);
  }

}
