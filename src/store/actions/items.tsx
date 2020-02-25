import { ItemsTypes, TodoListActionTypes } from '../../types';

export const toggleItem = (id: number): TodoListActionTypes => ({
  type: ItemsTypes.TOGGLE_ITEM,
  payload: {
    id,
  },
});

export const removeItem = (id: number): TodoListActionTypes => ({
  type: ItemsTypes.REMOVE_ITEM,
  payload: {
    id,
  },
});
