import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WorkersService} from '../common/service/workers.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {

  constructor(public workersService: WorkersService) { }

  @Output() showWorker = new EventEmitter<number>();
  ngOnInit() {
  }
  processWorkerById(id: number): void {
    this.showWorker.emit(id);
  }
}
