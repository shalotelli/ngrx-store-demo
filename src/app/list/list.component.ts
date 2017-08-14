import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as ListActions from '../actions/list.actions';
import { AppState } from '../interfaces/app-state';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  list: Observable<Item[]>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch({
      type: ListActions.ADD_ITEM,
      payload: new Item('New Item', 'New Item Description')
    });

    this.list = this.store.select('list');
  }

  reset() {
    this.store.dispatch({ type: ListActions.RESET_ITEMS });
  }

}
