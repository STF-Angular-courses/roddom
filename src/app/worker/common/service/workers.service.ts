import { Injectable } from '@angular/core';
import {WorkerModel} from '../model/worker.model';

@Injectable()
export class WorkersService {

  constructor() { }
 workers: WorkerModel[] = [
   {
     id: 1,
     name: 'Ivan',
     gender: 'Male',
     position: 'chief',
     description: 'Main person in hospital'
   },
   {
     id: 2,
     name: 'Dima',
     gender: 'Male',
     position: 'Doctor',
     description: 'Do all work'
   },
   {
     id: 3,
     name: 'Katya',
     gender: 'Female',
     position: 'Doctor',
     description: 'Do all work with Dima'
   }
 ];

  add() {
    const lastId = this.workers[this.workers.length - 1].id;
    const newId = lastId + 1;
    this.workers.push({
      id: newId,
      name: 'new worker',
      gender: 'gender',
      position: 'new posititon',
      description: 'description'
    });
  }
  remove(id: number): void {
    const deleteIndex = this.workers.findIndex((worker) => worker.id === id);

    this.workers.splice(deleteIndex, 1);
  }
}
