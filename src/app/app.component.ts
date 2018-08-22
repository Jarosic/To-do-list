import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class AppComponent implements OnInit {
  
  list = [];

  constructor(private service: ListService) {}

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.list = this.service._list
  }

  onDeleteList(event: any) {
    this.service.delete(event);
    this.updateList();
  }
}
