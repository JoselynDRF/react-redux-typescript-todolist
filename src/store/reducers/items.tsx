import { ItemsState, ItemsTypes, TodoListActionTypes } from '../../types';

const initialState: ItemsState = {
  data: [{
    id: 1,
    text: 'Test 1',
    editing: false,
    complete: false,
  }, {
    id: 2,
    text: 'Test 2',
    editing: false,
    complete: false,
  }],
};

export default (state = initialState, action: TodoListActionTypes): ItemsState => {
  switch (action.type) {
    case ItemsTypes.ADD_ITEM:
      return {
        data: [
          ...state.data,
          {
            id: Math.random(),
            text: action.payload.text,
            editing: false,
            complete: false,
          },
        ],
      };

    case ItemsTypes.TOGGLE_ITEM:
      return {
        data: state.data.map((item) => ((item.id === action.payload.id)
          ? { ...item, complete: !item.complete }
          : item)),
      };

    case ItemsTypes.TOGGLE_EDIT_ITEM:
      return {
        data: state.data.map((item) => ((item.id === action.payload.id)
          ? { ...item, editing: !item.editing }
          : item)),
      };

    case ItemsTypes.UPDATE_ITEM:
      return {
        data: state.data.map((item) => ((item.id === action.payload.id)
          ? { ...item, text: action.payload.text }
          : item)),
      };

    case ItemsTypes.REMOVE_ITEM:
      return {
        data: state.data.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
