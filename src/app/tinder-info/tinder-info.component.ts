import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserLikeComponent } from '../modal/user-like/user-like.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tinder-info',
  templateUrl: './tinder-info.component.html',
  styleUrls: ['./tinder-info.component.css']
})
export class TinderInfoComponent implements OnInit {

  users: User[] = [];
  currentUser: User | undefined = undefined;
  currentIndex: number = 0;
  YOU_GOT_MATCH = 'You got match!';

  constructor(
    private _userService: UserService,
    private _matDialog: MatDialog,
    private _matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers()
      .subscribe((users: User[]) => {
        if (users.length > 0) {
          this.users = users;
          this.currentUser = users[0];
          this.currentIndex = 0;
        }
      },
        error => {
          this._matSnackBar.open('Ошибка!', error, {
            duration: 3000
          })
        })
  }

  likePhoto(): void {
    let dialog = this._matDialog.open(UserLikeComponent,
      {
        width: '300px'
      });

    dialog.afterClosed().subscribe(value => {
      this.nextPhoto();
    })

  }

  nextPhoto(): void {
    this.currentIndex = (this.currentIndex < this.users.length - 1)
      ? this.currentIndex += 1
      : 0;
    this.currentUser = this.users[this.currentIndex];

  }

}
