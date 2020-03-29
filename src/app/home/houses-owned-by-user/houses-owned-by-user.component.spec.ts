import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesOwnedByUserComponent } from './houses-owned-by-user.component';

describe('HousesOwnedByUserComponent', () => {
  let component: HousesOwnedByUserComponent;
  let fixture: ComponentFixture<HousesOwnedByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesOwnedByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesOwnedByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
