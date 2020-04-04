import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Item, ApplicationState } from '../types';
import * as itemsActions from '../store/actions/items';

import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

interface StateProps {
  items: Item[]
}

interface DispatchProps {
  addItem(text: string): void,
  toggleItem(id: number): void,
  removeItem(id: number): void
}

type Props = StateProps & DispatchProps;

const TodoList = ({
  items,
  addItem,
  toggleItem,
  removeItem,
}: Props) => (
  <div className="todo-list">
    <Header title="TodoList" />

    <div className="content">
      <TodoForm addItem={addItem} />

      <ul className="items">
        {items.map((item) => (
          <TodoItem
            item={item}
            toggleItem={toggleItem}
            removeItem={removeItem}
          />
        ))}
      </ul>
    </div>
  </div>
);

const mapStateToProps = (state: ApplicationState) => ({
  items: state.items.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(itemsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
