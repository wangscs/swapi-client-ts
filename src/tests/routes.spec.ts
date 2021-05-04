import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppRoutingModule } from '../app/app-routing.module';

describe('App Routes', () => {
  let router: Router;
  let location: Location;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, AppRoutingModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should navigate to species component', fakeAsync(() => {
    router.navigate(['species']);
    tick();
    expect(location.path()).toBe('/species');
  }));

  it('should navigate to species/1 component', fakeAsync(() => {
    router.navigate(['species/1']);
    tick();
    expect(location.path()).toBe('/species/1');
  }));
});
