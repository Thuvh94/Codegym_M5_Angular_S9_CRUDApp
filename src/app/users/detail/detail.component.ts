import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {IUser} from '../../iuser';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user: IUser;
  id: any;
  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.userService.getUserById(this.id).subscribe((result) => {
        this.user = result;
      });
    });
  }

}
