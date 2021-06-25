"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GameComponent = void 0;
var core_1 = require("@angular/core");
var GameComponent = /** @class */ (function () {
    function GameComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.atkInimigo = 0;
        this.intlInimigo = 0;
        this.vidaInimigo = 0;
    }
    GameComponent.prototype.ngOnInit = function () {
        this.start();
    };
    GameComponent.prototype.getPersonagem = function () {
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
    GameComponent.prototype.getPersonagemRand = function () {
        var _this = this;
        this.loginService.getPersonagemRand().subscribe(function (x) {
            if (x['code'] == 200) {
                _this.nomeInimigo = x['data'].Nome;
                _this.idPInimigo = x['data'].ID;
                _this.atkInimigo = x['data'].Atk;
                _this.isMonsterInimigo = x['data'].IsMonset;
                _this.intlInimigo = x['data'].Int;
                _this.vidaInimigo = x['data'].Vida;
                _this.idPlayerInimigo = x['data'].ID_Player;
            }
        });
    };
    GameComponent.prototype.start = function () {
        var _this = this;
        this.getPersonagem();
        this.getPersonagemRand();
        setTimeout(function () {
            _this.batalha();
        }, 2000);
    };
    GameComponent.prototype.tipoDano = function () {
        this.aleatorio = Math.floor(Math.random() * 11);
        if (this.aleatorio <= 5) {
            this.vidaInimigo = this.vidaInimigo - this.atk;
            if (this.vidaInimigo <= 0) {
                clearInterval(this.acaba);
                alert('Ganhou!');
                this.router.navigateByUrl('/menu');
            }
            return 1;
        }
        else {
            this.vida = this.vida - this.atkInimigo;
            if (this.vida <= 0) {
                clearInterval(this.acaba);
                alert('Perdeu!');
                this.router.navigateByUrl('/menu');
            }
            return 2;
        }
    };
    GameComponent.prototype.batalha = function () {
        var _this = this;
        this.acaba = setInterval(function () {
            _this.tipoDano();
        }, 2000);
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'app-game',
            templateUrl: './game.component.html',
            styleUrls: ['./game.component.css']
        })
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
