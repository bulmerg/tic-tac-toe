import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/Player';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  player1: Player;
  player2: Player;
  playersForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.player1 = new Player(1);
    this.player2 = new Player(2);
  }

  ngOnInit() {
    this.playersForm = this.fb.group({
      player1Name: [''],
      player1Value: [''],
      player2Name: [''],
      player2Value: ['']
    });
  }

  setPlayerValue(player: number, value: string): void {
    // TODO: Fix two way binding when value is updated to empty string.
    value = this.validateValue(value);
    if (player === 1) {
      this.playersForm.get("player1Value").setValue(value);
    } else if (player === 2) {
      this.playersForm.get("player2Value").setValue(value);
    }
    
  }

  validateValue(value: string): string {
    return value === 'X' || value === 'O' ? value : '';
  }

  setPlayerName(player: number, value: string): void {
    if (player === 1) {
      this.playersForm.get("player1Name").setValue(value);
    } else if (player === 2) {
      this.playersForm.get("player2Name").setValue(value);
    }
  }

}
