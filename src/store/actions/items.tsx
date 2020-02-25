import { ItemsTypes, TodoListActionTypes } from '../../types';

export const toggleItem = (id: number): TodoListActionTypes => ({
  type: ItemsTypes.TOGGLE_ITEM,
  payload: {
    id,
  },
});
