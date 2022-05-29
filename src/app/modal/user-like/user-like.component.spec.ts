import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { UserLikeComponent } from './user-like.component';

describe('UserLikeComponent', () => {
  let component: UserLikeComponent;
  let fixture: ComponentFixture<UserLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MatDialogModule
      ],
      declarations: [ UserLikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
