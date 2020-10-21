import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './pages/players/players.component';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [
  {path: '', component: PlayersComponent},
  { path: 'players', component: PlayersComponent},
  { path: 'game', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
