import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerItemComponent } from './worker-item/worker-item-component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { WorkerShowComponent } from './worker-show/worker-show.component';
import {WorkersService} from './common/service/workers.service';
import { DescriptionPipe } from './common/pipe/description.pipe';



@NgModule({
  declarations: [WorkerItemComponent, WorkerListComponent, WorkerShowComponent, DescriptionPipe],
  imports: [
    CommonModule
  ],
  providers: [
    WorkersService
  ],
  exports: [
    WorkerListComponent,
    WorkerShowComponent,
    WorkerItemComponent
  ]
})
export class WorkerModule { }
