import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientItemComponent } from './client-item/client-item.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientShowComponent } from './client-show/client-show.component';



@NgModule({
  declarations: [ClientItemComponent, ClientListComponent, ClientShowComponent],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
