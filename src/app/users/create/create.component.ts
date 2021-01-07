import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {IUser} from '../../iuser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
    });
  }

  createUser() {
    const user: IUser = this.createForm.value;
    this.userService.create(user).subscribe(() => {
      alert('Create successfully!');
      this.router.navigate(['listUser']);
    });
  }

}
