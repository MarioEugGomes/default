import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilComponent } from './perfil.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Perfil'
    },
    children: [
      {
        path: '',
        component: PerfilComponent,
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
export class PerfilRoutingModule {}
