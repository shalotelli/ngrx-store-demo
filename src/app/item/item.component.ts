import {
  Component,
  Input
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as ListActions from '../actions/list.actions';
import { AppState } from '../interfaces/app-state';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input('item') item: Item;
  editableItem: Item;
  editMode = false;

  constructor(private store: Store<AppState>) {}

  update(form: NgForm) {
    const { name, description } = form.value;

    this.item.name = name;
    this.item.description = description;

    this.doUpdate();

    this.editMode = false;
  }

  edit() {
    this.editableItem = Object.assign({}, this.item);
    this.editMode = true;
  }

  toggleComplete() {
    this.item.complete = !this.item.complete;
    this.doUpdate();
  }

  delete() {
    this.store.dispatch({
      type: ListActions.REMOVE_ITEM,
      payload: this.item
    });
  }

  private doUpdate() {
    this.store.dispatch({
      type: ListActions.UPDATE_ITEM,
      payload: this.item
    });
  }

}
