import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { EstabelecimentoComponent } from './estabelecimento.component';
import { EstabelecimentoRoutingModule } from './estabelecimento-routing.module';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    EstabelecimentoRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ EstabelecimentoComponent, CreateComponent ]
})
export class EstabelecimentoModule { }
