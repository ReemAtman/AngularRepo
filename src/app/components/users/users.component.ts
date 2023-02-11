import { UserService } from './../../servises/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: any;
  test: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (myError) => {
        console.log(myError);
      },
    });
  }
  deleteUserHandler(userId: any) {
    this.userService.deleteUser(userId).subscribe((response) => {
      this.users = this.users.filter((user: any) => {
        return user.id != userId;
      });
    });
  }

  ngOnDestroy(): void {
    //this.test.unsubscribe();
  }
}
