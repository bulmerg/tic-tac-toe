import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty player1 name input', () => {
    const fixture = TestBed.createComponent(PlayersComponent);
    expect(fixture.componentInstance.player1.name.length).toBe(0);
  });

  it('should have and empty player1 value', () => {
    const fixture = TestBed.createComponent(PlayersComponent);
    expect(fixture.componentInstance.player1.value.length).toBe(0);
  });

  it('should have empty player2 name input', () => {
    const fixture = TestBed.createComponent(PlayersComponent);
    expect(fixture.componentInstance.player2.name.length).toBe(0);
  });

  it('should have and empty player2 value', () => {
    const fixture = TestBed.createComponent(PlayersComponent);
    expect(fixture.componentInstance.player2.value.length).toBe(0);
  });

  it('should set player value to entered value input', () => {
    let playerId = 1;
    this.setPlayerValue(playerId, 'X');
    expect(fixture.componentInstance.player1.value).toEqual('X');

    // let playerId2 = 2;
    // this.setPlayerValue(playerId2, 'O');
    // expect(fixture.componentInstance.player2.value).toEqual('X');

  });
});
