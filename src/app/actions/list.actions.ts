import { Action } from '@ngrx/store';
import { Item } from '../interfaces/item';

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const RESET_ITEMS = 'RESET_ITEMS';

export class AddAction implements Action {
  type = ADD_ITEM;

  constructor(public payload?: Item) {}
}

export class UpdateAction implements Action {
  type = UPDATE_ITEM;

  constructor(public payload?: Item) {}
}
export class RemoveAction implements Action {
  type = REMOVE_ITEM;

  constructor(public payload?: Item) {}
}

export class ResetAction implements Action {
  type = RESET_ITEMS;

  constructor(public payload?: Item) {}
}

export type Action =
  AddAction |
  UpdateAction |
  RemoveAction |
  ResetAction;
