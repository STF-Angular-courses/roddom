import { Injectable } from '@angular/core';
import {WorkerModel} from '../model/worker.model';

@Injectable()
export class WorkersService {

  constructor() { }
 workers: WorkerModel[] = [
   {
     uid: 1,
     name: 'Ivan',
     gender: 'Male',
     position: 'chief',
     description: 'Main person in hospital'
   },
   {
     uid: 2,
     name: 'Dima',
     gender: 'Male',
     position: 'Doctor',
     description: 'Do all work'
   },
   {
     uid: 3,
     name: 'Katya',
     gender: 'Female',
     position: 'Doctor',
     description: 'Do all work with Dima'
   }
 ];

  add() {
    const lastId = this.workers[this.workers.length - 1].uid;
    const newId = lastId + 1;
    this.workers.push({
      uid: newId,
      name: 'new worker',
      gender: 'gender',
      position: 'new posititon',
      description: 'description'
    });
  }
  remove(id: number): void {
    const deleteIndex = this.workers.findIndex((worker) => worker.uid === id);

    this.workers.splice(deleteIndex, 1);
  }
}
