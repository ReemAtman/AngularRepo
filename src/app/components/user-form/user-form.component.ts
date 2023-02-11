import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../servises/user.service';
import { Iuser } from 'src/app/modles/iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userId: any;
  emailValue: string = '';
  passValue: string = '';
  user: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.userService.getAllUsers().subscribe((response) => {
      this.user = response;
    });
  }
  ngOnInit(): void {}
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  get getEmail() {
    return this.userForm.controls['email'];
  }
  get getPassword() {
    return this.userForm.controls['password'];
  }

  login(e: any) {
    e.preventDefault();

    if (this.userId) {
      console.log(this.userId);
      //update
      const sameUser: Iuser = {
        id: this.userId,
        email: this.emailValue || this.user[this.userId].email,
        password: this.passValue || this.user[this.userId].password,
      };

      if (this.userForm.status == 'VALID') {
        this.userService
          .updateUser(this.userId, sameUser)
          .subscribe((response) => {
            console.log(response);
            this.emailValue = '';
            this.passValue = '';

            alert('update successfuly !!!');
          });
      }
    } else {
      //add
      const newUser: Iuser = {
        id: this.user[this.user.length - 1].id + 1,
        email: this.emailValue,
        password: this.passValue,
      };
      if (this.userForm.status == 'VALID') {
        this.userService.addNewUser(newUser).subscribe((response) => {
          console.log(response);
          alert('add successfuly !!!');
        });
      }
      console.log(newUser);
    }
  }
}
