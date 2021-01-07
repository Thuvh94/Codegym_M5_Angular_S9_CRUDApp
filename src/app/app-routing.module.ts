import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './users/list/list.component';
import {CreateComponent} from './users/create/create.component';
import {UpdateCommand} from '@angular/cli/commands/update-impl';
import {UpdateComponent} from './users/update/update.component';
import {DetailComponent} from './users/detail/detail.component';
const routes: Routes = [
  {
    path: 'listUser',
    component: ListComponent
  },
  {
    path: 'createUser',
    component: CreateComponent
  },
  {
    path: 'updateUser/:id',
    component: UpdateComponent
  },
  {
    path: 'detailUser/:id',
    component: DetailComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
