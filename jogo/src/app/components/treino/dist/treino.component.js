"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TreinoComponent = void 0;
var core_1 = require("@angular/core");
var TreinoComponent = /** @class */ (function () {
    function TreinoComponent(loginService, router, reg) {
        this.loginService = loginService;
        this.router = router;
        this.reg = reg;
        this.vidaMonster = 10;
        this.atkMonster = 10;
    }
    TreinoComponent.prototype.ngOnInit = function () {
        this.AumentaLevel();
    };
    // vai buscar os dados do meu player
    TreinoComponent.prototype.getPersonagem = function () {
        var _this = this;
        this.loginService.getPersonagem(this.loginService.id).subscribe(function (x) {
            if (x['code'] == 200) {
                _this.nome = x['data'].Personagens[0].Nome;
                _this.idP = x['data'].Personagens[0].ID;
                _this.atk = x['data'].Personagens[0].Atk;
                _this.isMonster = x['data'].Personagens[0].IsMonset;
                _this.intl = x['data'].Personagens[0].Int;
                _this.vida = x['data'].Personagens[0].Vida;
                _this.idPlayer = x['data'].Personagens[0].ID_Player;
            }
        });
    };
    TreinoComponent.prototype.AumentaLevel = function () {
        var _this = this;
        this.getPersonagem();
        setTimeout(function () {
            _this.batalha();
        }, 2000);
    };
    TreinoComponent.prototype.dano = function () {
        this.aleatorio = Math.floor(Math.random() * 11);
        if (this.aleatorio <= 5) {
            this.vidaMonster = this.vidaMonster - this.atk;
            if (this.vidaMonster <= 0) {
                clearInterval(this.acaba);
                alert('Ganhou o treino!');
                this.router.navigateByUrl('/menu');
            }
            return 1;
        }
        else {
            this.vida = this.vida - this.atkMonster;
            if (this.vida <= 0) {
                clearInterval(this.acaba);
                alert('Perdeu o treino!');
                this.router.navigateByUrl('/menu');
            }
            return 2;
        }
    };
    TreinoComponent.prototype.batalha = function () {
        var _this = this;
        this.acaba = setInterval(function () {
            _this.dano();
        }, 2000);
    };
    TreinoComponent.prototype.UpdateChar = function (nome, atk, intl, vida) {
        var _this = this;
        this.reg.updateChar(nome, atk, intl, vida).subscribe(function (x) {
            if (x['code'] == 200) {
                _this.router.navigate(['/menu']);
                console.log(x);
            }
            else {
                alert('erro');
            }
        });
    };
    TreinoComponent = __decorate([
        core_1.Component({
            selector: 'app-treino',
            templateUrl: './treino.component.html',
            styleUrls: ['./treino.component.css']
        })
    ], TreinoComponent);
    return TreinoComponent;
}());
exports.TreinoComponent = TreinoComponent;
