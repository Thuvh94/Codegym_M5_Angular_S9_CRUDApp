import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {IUser} from '../../iuser';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup;
  id: any;
  user: IUser;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      username: [''],
      email: [''],
      password: ['']
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');

      this.userService.getUserById(this.id).subscribe((result) => {
        this.user = result;
        this.updateForm.patchValue(this.user);
      });
    });
  }

  updateUser() {
    if (this.updateForm.valid) {
      const {value} = this.updateForm;
      const data = {
        ...this.user,
        ...value
      };
      this.userService.update(data).subscribe(result => {
          // this.userService.update(this.user).subscribe(result => {
          alert('Update successfully!');
          this.router.navigate(['listUser']);
        }, error => {
          console.log(error);
        }
      );
    }
  }
}
