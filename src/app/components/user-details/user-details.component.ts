import { UserService } from './../../servises/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userId: any;
  user: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.userId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.userService.getUserById(this.userId).subscribe((response) => {
      this.user = response;
      console.log(this.user);
    });
  }
}
