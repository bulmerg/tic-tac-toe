import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [PlayersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty player1 name input', () => {
    fixture.whenStable().then(() => {
      const fixture = TestBed.createComponent(PlayersComponent);
      expect(component.playersForm.get("player1Name").value.length).toBe(0);
    });
  });

  // it('should have and empty player1 value', () => {
  //   const fixture = TestBed.createComponent(PlayersComponent);
  //   expect(fixture.componentInstance.players[0].value.length).toBe(0);
  // });

  it('should have empty player2 name input', () => {
    const fixture = TestBed.createComponent(PlayersComponent);
    expect(component.playersForm.get("player2Name").value.length).toBe(0);
  });

  it('should have and empty player2 value', () => {
    const fixture = TestBed.createComponent(PlayersComponent);
    expect(component.playersForm.get("player2Value").value.length).toBe(0);
  });

  it('should only allow "X" or "O" as the player value', () => {
    let playerId = 1;
    component.setPlayerValue(playerId, 'Z');
    expect(component.playersForm.get("player1Value").value.length).toBe(0);

    component.setPlayerValue(playerId, 'X');
    expect(component.playersForm.get("player1Value").value).toEqual('X');

    component.setPlayerValue(playerId, 'O');
    expect(component.playersForm.get("player1Value").value).toEqual('O');
  });

  it('should populate player name correctly', () => {
    let playerId = 1;
    component.setPlayerName(playerId, 'Ted');
  });

  it('should automatically select the value for player2 once player1 value is entered and vise versa', () => {
    let playerId = 1;
    component.setPlayerValue(playerId, "X");
    expect(component.playersForm.get("player2Value").value).toEqual("O");
  
    playerId = 2;
    component.setPlayerValue(playerId, "X");
    expect(component.playersForm.get("player1Value").value).toEqual("O");
  });

});
