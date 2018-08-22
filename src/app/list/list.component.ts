import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { ListService } from '../list.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent  {

  @Input() toDo: any; 
  @Output() deleteList = new EventEmitter


  getClass() {
    return {
      'list-group-item-success': !this.toDo.status,
      'list-group-item-danger': !this.toDo.status,
      'list-group-item': true
    }
  }
  
  onAction(type: string) {
    this.toDo.status = type === 'done' ? true : false;
  }

  onDelete(event: any) {
    this.deleteList.emit(event)
    console.log(event)
  }
}
