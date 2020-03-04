import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstabelecimentoComponent } from './estabelecimento.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Estabelecimento'
    },
    children: [
      {
        path: '',
        component: EstabelecimentoComponent,
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
export class EstabelecimentoRoutingModule {}
