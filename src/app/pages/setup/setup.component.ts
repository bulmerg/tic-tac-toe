
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  playGame(value: boolean) {
    if (value === true) {
      this.route.navigate(['game']);
    }
  }

}
