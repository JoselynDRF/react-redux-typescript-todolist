import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoList from './containers/TodoList';
import './styles.scss';

export default () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);
