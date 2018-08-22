import { Injectable } from '@angular/core';

@Injectable()
export class ListService {

  

  list = [
    {
      name: 'Workout',
      status: false
    },
    {
      name: 'Cleaning',
      status: false
    },
    {
      name: 'Learn JS',
      status: false
    }
  ];
  _list: any;

  constructor() { 
    this._list = this.list;
  }

  getList() {
    return this._list;
  }

  

  addList(name: string) {
    this._list.push({ name: name, status: false });
  }

  delete(event: any): void {
    this._list = this._list.filter((li) => li !==  event);
  }
}
