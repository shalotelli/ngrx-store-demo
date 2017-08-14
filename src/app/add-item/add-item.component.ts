import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as ListActions from '../actions/list.actions';
import { AppState } from '../interfaces/app-state';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  item: Item = this.defaultItem();

  constructor(private store: Store<AppState>) {}

  add(form: NgForm) {
    const { name, description } = form.value;
    this.store.dispatch({
      type: ListActions.ADD_ITEM,
      payload: new Item(name, description)
    });

    this.item = this.defaultItem();
  }

  private defaultItem() {
    return new Item('');
  }

}
