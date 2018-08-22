import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListOperationComponent } from './list-operation/list-operation.component';
import { ListService } from './list.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListOperationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
