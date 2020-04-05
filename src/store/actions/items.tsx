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

export const toggleEditItem = (id: number) => ({
  type: ItemsTypes.TOGGLE_EDIT_ITEM,
  payload: {
    id,
  },
});

export const updateItem = (id:number, text: string) => ({
  type: ItemsTypes.UPDATE_ITEM,
  payload: {
    id,
    text,
  },
});

export const removeItem = (id: number) => ({
  type: ItemsTypes.REMOVE_ITEM,
  payload: {
    id,
  },
});
