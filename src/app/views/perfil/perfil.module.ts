import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { PerfilComponent } from './perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    PerfilRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ PerfilComponent, CreateComponent ]
})
export class PerfilModule { }
