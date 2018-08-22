import { Component } from '@angular/core';
import { ListService } from '../list.service';


@Component({
  selector: 'app-list-operation',
  templateUrl: './list-operation.component.html',
  styleUrls: ['./list-operation.component.css']
})
export class ListOperationComponent  {
  listName = '';

  constructor(private service: ListService) { }

  addList() {
    this.service.addList(this.listName);
    this.listName = '';
  }

}
