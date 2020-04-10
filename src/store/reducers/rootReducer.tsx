import { combineReducers } from 'redux';
import items from './items';
import filterState from './filter';

export default combineReducers({
  items,
  filterState,
});
