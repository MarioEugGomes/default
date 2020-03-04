import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Usuários'
    },
    children: [
      {
        path: '',
        component: UserComponent,
        data: {
          title: 'Lista'
        }
      },
      {
        path: 'create',
        component: CreateComponent,
        data: {
          title: 'Cadastro'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
