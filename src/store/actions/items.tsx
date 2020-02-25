import { ItemsTypes } from '../../types';

export const addItem = (text: string) => ({
  type: ItemsTypes.ADD_ITEM,
  payload: {
    text,
  },
});

export const toggleItem = (id: number) => ({
  type: ItemsTypes.TOGGLE_ITEM,
  payload: {
    id,
  },
});

export const removeItem = (id: number) => ({
  type: ItemsTypes.REMOVE_ITEM,
  payload: {
    id,
  },
});
