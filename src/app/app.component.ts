import { Component, OnInit } from '@angular/core';
import { Player } from './models/Player';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tic-tac-toe';
  square = '';
  grid: FormGroup
  constructor (private fb: FormBuilder) { }

  ngOnInit(): void {
    this.grid = this.fb.group({
      square1: ['']
    });
  }

  handleSquareClick(value: string) {
    this.grid.get("square1").setValue(value);
    // this.square = value;
  }

}
