import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Player } from '../../models/Player';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlayersService } from './players.service';


@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  @Output() playGame: EventEmitter<boolean> = new EventEmitter<boolean>();
  playersForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private playersService: PlayersService
    ) { }

  ngOnInit() {
    this.playersForm = this.fb.group({
      player1Name: ['', Validators.required],
      player1Value: ['', Validators.required],
      player2Name: ['', Validators.required],
      player2Value: ['', Validators.required]
    });
  }

  setPlayerValue(player: number, value: string): void {
    // TODO: Fix two way binding when value is updated to empty string.
    value = this.validateValue(value);
    let otherValue = value == 'X' ? 'O' : 'X';
    if (player === 1) {
      this.playersForm.get("player1Value").setValue(value);
      this.playersForm.get("player2Value").setValue(otherValue);
    } else if (player === 2) {
      this.playersForm.get("player2Value").setValue(value);
      this.playersForm.get("player1Value").setValue(otherValue);
    }
  }

  validateValue(value: string): string {
    value = value.toUpperCase();
    return value === 'X' || value === 'O' ? value : '';
  }

  setPlayerName(player: number, value: string): void {
    if (player === 1) {
      this.playersForm.get("player1Name").setValue(value);
    } else if (player === 2) {
      this.playersForm.get("player2Name").setValue(value);
    }
  }

  submit() {
    let players = new Array<Player>();
    players.push({
      id: 1,
      name: this.playersForm.get("player1Name").value,
      value: this.playersForm.get("player1Value").value
    });

    players.push({
      id: 2,
      name: this.playersForm.get("player2Name").value,
      value: this.playersForm.get("player2Value").value
    });
    this.playersService.setPlayers(players);
    if (this.playersForm.valid) {
      this.playGame.emit(true)
    }
  }

}
