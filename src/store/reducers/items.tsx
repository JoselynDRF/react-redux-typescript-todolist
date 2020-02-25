import { ItemsState, ItemsTypes, TodoListActionTypes } from '../../types';

const initialState: ItemsState = {
  data: [{
    id: 1,
    text: 'Test',
    complete: false,
  }],
};

export default (state = initialState, action: TodoListActionTypes): ItemsState => {
  switch (action.type) {
    case ItemsTypes.TOGGLE_ITEM:
      return {
        data: state.data.map((item) => ((item.id === action.payload.id)
          ? { ...item, complete: !item.complete }
          : item)),
      };

    default:
      return state;
  }
};
