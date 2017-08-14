import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { ListReducer } from './reducers/list.reducer';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    AddItemComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      list: ListReducer
    })
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
