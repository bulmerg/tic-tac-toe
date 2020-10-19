import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Player } from '../../models/Player';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];
  constructor() { 
    
    this.players.push(new Player());
    this.players.push(new Player());
  }

  ngOnInit() {
  }

  setPlayerValue(player: number, value: string) {
    this.players[player].value = value === 'X' || value === 'O' ? value : '';
  }
}
