/**
 * Action types
 */
export enum ItemsTypes {
  ADD_ITEM = 'ADD_ITEM',
  TOGGLE_ITEM = 'TOGGLE_ITEM',
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
  complete: boolean
}

/**
 * State type
 */
export interface ApplicationState {
  items: ItemsState
}

export interface ItemsState {
  readonly data: Item[]
}
