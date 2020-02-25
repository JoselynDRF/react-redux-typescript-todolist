/**
 * Action types
 */
export enum ItemsTypes {
  TOGGLE_ITEM = 'TOGGLE_ITEM'
}

interface ToggleItemAction {
  type: string,
  payload: Item
}

export type TodoListActionTypes = ToggleItemAction;

/**
 * Data types
 */
export interface Item {
  id: number,
  text?: string,
  complete?: boolean
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
