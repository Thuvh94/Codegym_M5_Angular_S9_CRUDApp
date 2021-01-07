import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {IUser} from '../../iuser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listUser: IUser[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): IUser[] {
    this.userService.getAllUsers().subscribe((result) => {
      this.listUser = result;
    });
    return this.listUser;
  }

  // tslint:disable-next-line:typedef
  deleteUser(id: number){
    if (confirm('Are you sure?')){
      this.userService.delete(id).subscribe((result) => {
        console.log('Delete: ' + result);
        this.getAllUsers();
      });
    }
  }

}
