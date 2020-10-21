import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ GameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display players value when clicked (row1, col1)', () => {
    component.handleSquareClick('X');

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
