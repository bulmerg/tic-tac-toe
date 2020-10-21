import { Component, OnInit } from '@angular/core';
import { Player } from './models/Player';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tic-Tac-Toe';
  square = '';
  
  currentPlayer: Player;
  constructor (private fb: FormBuilder) { 

  }

  ngOnInit(): void {

  }

  

}
