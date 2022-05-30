import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogStub } from '../unit-test/stubs/mat-dialog.stub';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarStub } from '../unit-test/stubs/mat-snack-bar.stub';
import { OverlayModule } from '@angular/cdk/overlay';
import { TinderInfoComponent } from './tinder-info.component';
import { UserMock } from '../unit-test/mocks/user.mock';
import { UserService } from '../service/user.service';
import { UserServiceStub } from '../unit-test/stubs/user-service.stub';
import { of, throwError } from 'rxjs';


describe('TinderInfoComponent', () => {
  let component: TinderInfoComponent;
  let fixture: ComponentFixture<TinderInfoComponent>;

  const _userService = new UserServiceStub();
  const _matDialog = new MatDialogStub();
  const _matSnackBar = new MatSnackBarStub();

  const userMock = new UserMock();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        OverlayModule
      ],
      declarations: [
        TinderInfoComponent
      ],
      providers: [
        { provide: MatSnackBar, useValue: _matSnackBar },
        { provide: MatDialog, useValue: _matDialog },
        { provide: UserService, useValue: _userService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getUsers with success', () => {

    component.currentUser = undefined;
    component.users = [];

    spyOn(_userService, 'getUsers')
      .and.returnValue(of([]));

    fixture.detectChanges();
    const infoMessageEl: HTMLElement = fixture.debugElement.nativeElement
    const content_info = infoMessageEl.querySelector('.content-info');

    component.getUsers();

    expect(content_info).toBeNull();
    expect(_userService.getUsers).toHaveBeenCalled();
  });

  it('getUsers with error', () => {
    const messageError = 'error';

    spyOn(_userService, 'getUsers')
      .and.returnValue(throwError(messageError));

    spyOn(_matSnackBar, 'open').and.callThrough();

    component.getUsers();

    expect(_userService.getUsers).toHaveBeenCalled();
    expect(_matSnackBar.open).toHaveBeenCalled();
  });

  it('ngOnInit if exist users', () => {
    spyOn(_userService, 'getUsers')
      .and.returnValue(of(userMock.users));

    fixture.detectChanges();
    const infoMessageEl: HTMLElement = fixture.debugElement.nativeElement
    const content_info = infoMessageEl.querySelector('.content-info');

    component.ngOnInit();

    expect(content_info?.textContent).toContain(userMock.users[0].firstName);
    expect(_userService.getUsers).toHaveBeenCalled();
    expect(component.users).toEqual(userMock.users);
    expect(component.currentUser).toEqual(userMock.users[0]);
    expect(component.currentIndex).toEqual(0);
  });

  it('likePhoto', () => {
    let dialogSpy = spyOn(TestBed.get(MatDialog), 'open')
      .and.returnValue({
        afterClosed() {
          return of(undefined)
        }
      });

    spyOn(component, 'nextPhoto');

    component.likePhoto();
    expect(dialogSpy).toHaveBeenCalled();
    expect(component.nextPhoto).toHaveBeenCalled();

  });



  it('nextPhoto if index=0', () => {
    const users = userMock.users;
    const index = 0;

    component.currentIndex = index;
    component.nextPhoto();

    expect(component.currentUser).toEqual(users[index + 1]);

  });

  it('nextPhoto if index > users.length', () => {
    const users = userMock.users;
    const index = userMock.users.length + 1;

    component.currentIndex = index;
    component.nextPhoto();

    expect(component.currentUser).toEqual(users[0]);

  });

});
