/**
 * Action types
 */
export enum ItemsTypes {
  ADD_ITEM = 'ADD_ITEM',
  TOGGLE_ITEM = 'TOGGLE_ITEM',
  TOGGLE_EDIT_ITEM = 'TOGGLE_EDIT_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export interface TodoListActionTypes {
  type: string,
  payload: Item
}

/**
 * Data types
 */
export interface Item {
  id: number,
  text: string,
  editing: boolean,
  complete: boolean
}

/**
 * State types
 */
export interface ApplicationState {
  items: ItemsState
}

export interface ItemsState {
  readonly data: Item[]
}
