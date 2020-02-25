import { ItemsState, ItemsTypes, TodoListActionTypes } from '../../types';

const initialState: ItemsState = {
  data: [{
    id: 1,
    text: 'Test 1',
    complete: false,
  }, {
    id: 2,
    text: 'Test 2',
    complete: false,
  }],
};

export default (state = initialState, action: TodoListActionTypes): ItemsState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        data: [
          ...state.data,
          {
            id: Math.random(),
            text: action.payload.text,
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

    case ItemsTypes.REMOVE_ITEM:
      return {
        data: state.data.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
