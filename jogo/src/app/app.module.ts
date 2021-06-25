import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GameComponent } from './components/game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegistoComponent } from './components/registo/registo.component';
import { TreinoComponent } from './components/treino/treino.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArmasComponent } from './components/armas/armas.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FourOFourComponent,
    HomeComponent,
    NavBarComponent,
    GameComponent,
    LoginComponent,
    RegistoComponent,
    TreinoComponent,
    MenuComponent,
    ArmasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
