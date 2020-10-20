import { TestBed, async, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { tick, markDirty } from '@angular/core/src/render3';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        MockPlayersComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  @Component({
    selector: 'players',
    template: ''
  })
  class MockPlayersComponent {
  }


  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tic-tac-toe'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tic-tac-toe');
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to tic-tac-toe!');
  });

  it('should display players value when clicked (row1, col1)', () => {
    let componentRef = fixture.componentRef;
    fixture.componentInstance.handleSquareClick('X');

    fixture.whenStable().then( () => {
      expect(fixture.componentInstance.handleSquareClick).toHaveBeenCalled();
      expect(fixture.componentInstance.grid.get("square1").value).toEqual('X');
    });
  });
});
