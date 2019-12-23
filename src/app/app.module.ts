import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkerModule} from './worker/worker.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WorkerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
