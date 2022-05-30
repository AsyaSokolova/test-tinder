import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TinderInfoComponent } from './tinder-info/tinder-info.component';
import { MatDialogStub } from './unit-test/stubs/mat-dialog.stub';
import { MatSnackBarStub } from './unit-test/stubs/mat-snack-bar.stub';

describe('AppComponent', () => {
  const _matDialog = new MatDialogStub();
  const _matSnackBar = new MatSnackBarStub();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        TinderInfoComponent
      ],
      providers:[
        { provide: MatDialog, useValue: _matDialog },
        { provide: MatSnackBar, useValue: _matSnackBar },
        
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
