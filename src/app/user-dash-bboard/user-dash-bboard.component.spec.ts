import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashBboardComponent } from './user-dash-bboard.component';

describe('UserDashBboardComponent', () => {
  let component: UserDashBboardComponent;
  let fixture: ComponentFixture<UserDashBboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashBboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashBboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
