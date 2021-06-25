"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegistoService = void 0;
var core_1 = require("@angular/core");
var RegistoService = /** @class */ (function () {
    function RegistoService(http) {
        this.http = http;
        this.link = 'http://moreiramoises.pt/server/apis/signup.php';
        this.link2 = 'http://moreiramoises.pt/server/apis/createChart.php';
        this.link3 = 'http://moreiramoises.pt/server/apis/createArma.php';
        this.link4 = 'http://moreiramoises.pt/server/apis/updateChart.php';
    }
    RegistoService.prototype.registo = function (nome, pass) {
        var datToSend = new FormData();
        datToSend.append('username', nome);
        datToSend.append('password', pass);
        return this.http.post(this.link, datToSend);
    };
    RegistoService.prototype.criarPersonagem = function (nome, atk, intl, vida) {
        var datToSend = new FormData();
        datToSend.append('name', nome);
        datToSend.append('atk', atk);
        datToSend.append('isMonster', 'false');
        datToSend.append('int', intl);
        datToSend.append('vida', vida);
        datToSend.append('username', 'Tobias');
        datToSend.append('password', '1234');
        return this.http.post(this.link2, datToSend);
    };
    RegistoService.prototype.criaArma = function (nome, atk, durabilidade, vida) {
        var data = new FormData();
        data.append('name', nome);
        data.append('atk', atk);
        data.append('durabilidade', durabilidade);
        data.append('tipoDeArma', 'arma');
        data.append('vida', vida);
        data.append('username', 'tobias');
        data.append('password', '1234');
        data.append('idPersonagem', '138');
        return this.http.post(this.link3, data);
    };
    RegistoService.prototype.updateChar = function (nome, atk, intl, vida) {
        var datToSend = new FormData();
        datToSend.append('name', nome);
        datToSend.append('atk', atk);
        datToSend.append('isMonster', 'false');
        datToSend.append('int', intl);
        datToSend.append('vida', vida);
        datToSend.append('username', 'Tobias');
        datToSend.append('password', '1234');
        return this.http.post(this.link3, datToSend);
    };
    RegistoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RegistoService);
    return RegistoService;
}());
exports.RegistoService = RegistoService;
