import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/Player';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  player1: Player;
  player2: Player;
  constructor() { 
    this.player1 = new Player(1);
    this.player2 = new Player(2);
  }

  ngOnInit() {
  }

  setPlayerValue(player: number, value: string) {
    // TODO: Fix two way binding when value is updated to empty string.
    if (player === 1) {
      this.player1.value = value === 'X' || value === 'O' ? value : '';
    } else if (player === 2) {
      this.player2.value = value === 'X' || value === 'O' ? value : '';
    }
    
  }

}
