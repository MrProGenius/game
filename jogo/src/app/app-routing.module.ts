import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistoComponent } from './components/registo/registo.component';
import { TreinoComponent } from './components/treino/treino.component';
import { ArmasComponent } from './components/armas/armas.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'notFound', component: FourOFourComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registo', component: RegistoComponent },
  { path: 'game', component: GameComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'treinar', component: TreinoComponent },
  { path: 'armas', component: ArmasComponent },
  { path: '**', redirectTo: 'notFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
