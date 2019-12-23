import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  workerId: number | null = null;
  activeWorkerList = true;

  showWorker(id: number): void {
    this.workerId = id;
    this.activeWorkerList = false;
  }

  backToList(): void {
    this.workerId = null;
    this.activeWorkerList = true;

  }
}
