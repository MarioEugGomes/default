import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConveniosComponent } from './convenios.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Convênios'
    },
    children: [
      {
        path: '',
        component: ConveniosComponent,
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
export class ConveniosRoutingModule {}
