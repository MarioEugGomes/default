import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ConveniosComponent } from './convenios.component';
import { ConveniosRoutingModule } from './convenios-routing.module';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    ConveniosRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ ConveniosComponent, CreateComponent ]
})
export class ConveniosModule { }
