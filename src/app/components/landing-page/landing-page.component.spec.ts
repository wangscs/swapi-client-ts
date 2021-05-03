import { TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LandingPageComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
