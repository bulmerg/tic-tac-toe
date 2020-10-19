import { Component } from '@angular/core';
import { Player } from './models/Player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  player1: Player;
  player2: Player;

  constructor () {
    this.player1 = new Player();
    this.player2 = new Player();
  }
}
