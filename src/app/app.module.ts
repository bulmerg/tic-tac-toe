import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './pages/players/players.component';
import { SquareComponent } from './fragments/square/square.component';
import { GameComponent } from './pages/game/game.component';
import { SetupComponent } from './pages/setup/setup.component';
import { PlayersService } from './pages/players/players.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    SquareComponent,
    GameComponent,
    SetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
