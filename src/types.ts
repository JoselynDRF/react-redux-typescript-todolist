/**
 * Action types
 */
export enum ItemsTypes {
  ADD_ITEM = 'ADD_ITEM',
  TOGGLE_ITEM = 'TOGGLE_ITEM',
  TOGGLE_EDIT_ITEM = 'TOGGLE_EDIT_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM'
}

/**
 * Filter options
 */
export enum VisibilityFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  UPDATE_FILTER = 'UPDATE_FILTER'
}

export interface TodoListActionTypes {
  type: string,
  payload: Item
}

export interface FilterActionTypes {
  type: string,
  payload: {
    filter: string
  }
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
  items: ItemsState,
  filterState: string
}

export interface ItemsState {
  readonly data: Item[]
}
