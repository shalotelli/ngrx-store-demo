import { Action } from '@ngrx/store';
import { List } from 'immutable';

import { Item } from '../interfaces/item';
import * as ListActions from '../actions/list.actions';

export function ListReducer(state: List<Item> = List([]), action: ListActions.Action) {
  let itemIndex: number;

  switch (action.type) {
    case ListActions.ADD_ITEM:
      return state.push(action.payload);

    case ListActions.UPDATE_ITEM:
      itemIndex = state.findIndex(
        (x) => x.createdOn.toString() === action.payload.createdOn.toString()
      );

      if (itemIndex > -1) {
        action.payload.modifiedOn = new Date();
        const newState = state.splice(itemIndex, 1, action.payload);
      }

      return state;

    case ListActions.REMOVE_ITEM:
      itemIndex = state.findIndex(
        (x) => x.createdOn.toString() === action.payload.createdOn.toString()
      );

      return (itemIndex > -1) ? state.splice(itemIndex, 1) : state;

    case ListActions.RESET_ITEMS:
      return List([]);

    default:
      return state;
  }
}
