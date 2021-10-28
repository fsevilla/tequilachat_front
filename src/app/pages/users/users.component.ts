import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/common/datatypes/user';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().then(response => {
      this.users = response;
    }).catch(e => {
      console.log('Error:  ', e);
    });
  }

}
