const INITIAL_STATE: any = [{
  id: 1,
  text: 'Test',
  complete: false,
}];

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'TOGGLE_ITEM':
      return state.map((item: any) => ((item.id === action.payload.id)
        ? { ...item, complete: !item.complete }
        : item));

    default:
      return state;
  }
};
