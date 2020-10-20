import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { tick, markDirty } from '@angular/core/src/render3';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockPlayersComponent
      ],
    }).compileComponents();
  }));

  @Component({
    selector: 'players',
    template: ''
  })
  class MockPlayersComponent {
  }


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tic-tac-toe'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tic-tac-toe');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to tic-tac-toe!');
  });

  it('should display players value when clicked (row1, col1)', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    spyOn(fixture.componentInstance, 'handleSquareClick');
    fixture.componentInstance.handleSquareClick();
    const square = fixture.debugElement.nativeElement.querySelector('#square1');
    square.click();
    
    fixture.whenStable().then( () => {
      expect(fixture.componentInstance.handleSquareClick).toHaveBeenCalled();
    // expect(fixture.componentInstance.)
    });
    
  }));
});
