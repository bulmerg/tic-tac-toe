import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './pages/setup/setup.component';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [
  {path: '', component: SetupComponent},
  { path: 'setup', component: SetupComponent},
  { path: 'game', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
