import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkerModel} from '../common/model/worker.model';
import {WorkersService} from '../common/service/workers.service';

@Component({
  selector: 'app-worker-item',
  templateUrl: './worker-item-component.html',
  styleUrls: ['./worker-item-component.css']
})
export class WorkerItemComponent implements OnInit {

  @Input() worker: WorkerModel;
  @Output() giveId = new EventEmitter<number>();
  constructor(public workersService: WorkersService) { }

  ngOnInit() {
  }

  show(id: number) {
    console.log(id);
    this.giveId.emit(id);
  }

}
