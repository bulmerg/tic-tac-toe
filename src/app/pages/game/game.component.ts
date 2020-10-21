import { Component, Input, OnInit, PlatformRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/Player';
import { Square } from 'src/app/models/Square';
import { PlayersService } from '../players/players.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  players: Array<Player>;
  squares: Array<Square>;
  moves: Array<Square>; // In order of selected squares during play
  currentPlayer: Player;
  grid: FormGroup
  emptyPlayer = new Player(0, '', '');
  readonly gridSize = 9;
  constructor(private fb: FormBuilder, private playersService: PlayersService, private router: Router) {
  }

  ngOnInit(): void {
    this.playersService.playersData.subscribe(data => {
      this.handlePlayerData(data);
    });
    this.buildForm();
    this.buildSquares();
    this.moves = new Array<Square>();
  }

  buildForm() {
    this.grid = this.fb.group({
      square1: [''],
      square2: [''],
      square3: [''],
      square4: [''],
      square5: [''],
      square6: [''],
      square7: [''],
      square8: [''],
      square9: ['']
    });
  }
  handlePlayerData(players: Array<Player>) {
    let navToSetup = false;
      if (players && players.length > 0) {
        this.players = players;
        if (this.checkPlayers(this.players)) {
          this.currentPlayer = this.players[0];
        } else {
          navToSetup = true;
        }
      } else {
        navToSetup = true;
      }
      
      if (navToSetup) {
        this.router.navigate(['setup']);
      }
  }

  checkPlayers(players: Array<Player>): boolean {
    if (players) {
      players.forEach((player) => {
        if (player.name.length === 0 || player.value.length === 0) {
          return false;
        }
      });
    } else {
      return false;
    }
    
    return true;
  }

  buildSquares() {
    if (!this.squares || this.squares.length != this.gridSize) {
      this.squares = new Array<Square>();
    }
    
    
    for (let n = 0; n < this.gridSize; n++) {
      this.squares.push(new Square(n + 1, this.emptyPlayer));
    }
  }

  handleSquareClick(id: number) {
    this.grid.get(`square${id}`).setValue(this.currentPlayer.value);
    this.squares[id - 1].player = { ...this.currentPlayer };
    this.moves.push(this.squares[id-1]);
    if (this.isGameOver()) {
      alert(`Thank you for playing ${this.players[0].name} and ${this.players[1].name}!!!`);
    } else {
      this.nextPlayer();
    }
  }

  nextPlayer() {
    this.currentPlayer = this.currentPlayer.id === 1 ? this.players[1] : this.players[0];
  }

  isGameOver(): boolean {
    // TODO: Refactor this to clean up and make more readable.  Maybe compare to a series of winning groups.
    if (
      (this.currentPlayer.value == this.squares[0].player.value && this.squares[0].player.value === this.squares[1].player.value && this.squares[1].player.value === this.squares[2].player.value) || // rows
      (this.currentPlayer.value == this.squares[3].player.value && this.squares[3].player.value === this.squares[4].player.value && this.squares[4].player.value === this.squares[5].player.value) ||
      (this.currentPlayer.value == this.squares[6].player.value && this.squares[6].player.value === this.squares[7].player.value && this.squares[7].player.value === this.squares[8].player.value) ||
      (this.currentPlayer.value == this.squares[0].player.value && this.squares[0].player.value === this.squares[3].player.value && this.squares[3].player.value === this.squares[6].player.value) || // columns 
      (this.currentPlayer.value == this.squares[1].player.value && this.squares[1].player.value === this.squares[4].player.value && this.squares[4].player.value === this.squares[7].player.value) ||
      (this.currentPlayer.value == this.squares[2].player.value && this.squares[2].player.value === this.squares[5].player.value && this.squares[5].player.value === this.squares[8].player.value) ||
      (this.currentPlayer.value == this.squares[0].player.value && this.squares[0].player.value === this.squares[4].player.value && this.squares[4].player.value === this.squares[8].player.value) || // diag
      (this.currentPlayer.value == this.squares[2].player.value && this.squares[2].player.value === this.squares[4].player.value && this.squares[4].player.value === this.squares[6].player.value)
    ) {
      this.showWinner();
      return true;
    } else if (this.gridFull()) {
      this.showTie();
      return true;
    }
    return false;
  }

  gridFull(): boolean {
    let full = false;
    if (this.squares && this.squares.length === this.gridSize) {
      full = this.squares.every((square) => {
        return square.player.id > 0;
      });
    }
    return full;
  }

  showWinner() {
    alert(`${this.currentPlayer.name} (${this.currentPlayer.value}) has won!!!`);
  }

  showTie() {
    alert('Tie!!!');
  }

  rewind() {
    if (this.moves.length > 0) {
      let lastMove = this.moves[this.moves.length-1];
      this.moves.pop();
      this.squares[lastMove.id-1].player = this.emptyPlayer;
      this.grid.get(`square${lastMove.id}`).setValue('');
    }
  }

  reset() {
    this.grid.reset();
    this.squares.forEach((square) => {
      square.player = this.emptyPlayer;
    });
    this.ngOnInit();
  }

  changePlayers() {
    this.grid.reset();
    this.router.navigate(['setup']);
  }
}
