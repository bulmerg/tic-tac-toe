import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  grid: FormGroup 
  squares: FormArray;
  readonly gridSize = 9;
  constructor (private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.squares = new FormArray([]);
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

  buildSquares() {
    for (let n = 0; n<this.gridSize; n++) {
      this.squares.push(new FormControl(''));
    }
  }
  
  handleSquareClick(value: string) {
    this.grid.get("square1").setValue(value);
  }
}
