import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    UserRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ UserComponent, CreateComponent ]
})
export class UserModule { }
