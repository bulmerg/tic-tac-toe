import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));



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

  it('should have empty player1 name input', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.player1.name.length).toBe(0);
  });

  it('should have and empty player1 value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.player1.value.length).toBe(0);
  });

  it('should have empty player2 name input', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.player2.name.length).toBe(0);
  });

  it('should have and empty player2 value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.player2.value.length).toBe(0);
  });
});
