"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArmasComponent = void 0;
var core_1 = require("@angular/core");
var ArmasComponent = /** @class */ (function () {
    function ArmasComponent(reg, router) {
        this.reg = reg;
        this.router = router;
    }
    ArmasComponent.prototype.ngOnInit = function () { };
    ArmasComponent.prototype.criaArma = function (nome, atk, durabilidade, vida) {
        var _this = this;
        this.reg.criaArma(nome, atk, durabilidade, vida).subscribe(function (x) {
            if (x['code'] == 200) {
                _this.router.navigate(['/menu']);
                console.log(x);
            }
            else {
                alert('erro');
            }
        });
    };
    ArmasComponent = __decorate([
        core_1.Component({
            selector: 'app-armas',
            templateUrl: './armas.component.html',
            styleUrls: ['./armas.component.css']
        })
    ], ArmasComponent);
    return ArmasComponent;
}());
exports.ArmasComponent = ArmasComponent;
