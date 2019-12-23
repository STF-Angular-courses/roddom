import {Component, Input, OnInit} from '@angular/core';
import {WorkersService} from '../common/service/workers.service';
import {WorkerModel} from '../common/model/worker.model';

@Component({
  selector: 'app-worker-show',
  templateUrl: './worker-show.component.html',
  styleUrls: ['./worker-show.component.css']
})
export class WorkerShowComponent implements OnInit {
  @Input() workerId: number;
  constructor(private workersService: WorkersService) { }

  get worker(): WorkerModel {
    return this.workersService.workers.find((worker) => worker.uid === this.workerId);
  }
  ngOnInit() {
  }
}
