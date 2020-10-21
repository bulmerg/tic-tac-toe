import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/Player';
import { RouterTestingModule } from '@angular/router/testing';
import { SetupComponent } from '../setup/setup.component';
import { PlayersComponent } from '../players/players.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule.withRoutes([
        {path: 'setup', component: SetupComponent}
      ])],
      declarations: [ GameComponent, SetupComponent, PlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    component.players = new Array<Player>();
    component.players.push(new Player(1, 'Frank', 'X'));
    component.players.push(new Player(2, 'Larry', 'O'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display players value when clicked (row1, col1)', () => {
    component.currentPlayer = component.players[0];
    component.handleSquareClick(1);
    fixture.whenStable().then( () => {
      expect(component.handleSquareClick).toHaveBeenCalled();
      expect(component.grid.get("square1").value).toEqual('X');
    });
  });

  it('should have 9 squares in the grid', () => {
    component.buildSquares();
    expect(component.squares.length).toBe(9);
  });
});
