"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var four_ofour_component_1 = require("./components/four-ofour/four-ofour.component");
var game_component_1 = require("./components/game/game.component");
var home_component_1 = require("./components/home/home.component");
var login_component_1 = require("./components/login/login.component");
var menu_component_1 = require("./components/menu/menu.component");
var registo_component_1 = require("./components/registo/registo.component");
var treino_component_1 = require("./components/treino/treino.component");
var armas_component_1 = require("./components/armas/armas.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'notFound', component: four_ofour_component_1.FourOFourComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'registo', component: registo_component_1.RegistoComponent },
    { path: 'game', component: game_component_1.GameComponent },
    { path: 'menu', component: menu_component_1.MenuComponent },
    { path: 'treinar', component: treino_component_1.TreinoComponent },
    { path: 'armas', component: armas_component_1.ArmasComponent },
    { path: '**', redirectTo: 'notFound' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
