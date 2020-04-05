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
  toggleEditItem(id: number): void,
  updateItem(id: number, text: string): void,
  removeItem(id: number): void
}

type Props = StateProps & DispatchProps;

const TodoList = ({
  items,
  addItem,
  toggleItem,
  toggleEditItem,
  updateItem,
  removeItem,
}: Props) => (
  <div className="todo-list">
    <Header title="TodoList" />

    <div className="content">
      <TodoForm addItem={addItem} />

      <ul className="items">
        {items.length
          ? items.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              toggleItem={toggleItem}
              toggleEditItem={toggleEditItem}
              updateItem={updateItem}
              removeItem={removeItem}
            />
          )) : (
            <div className="empty-list">
              <i className="fas fa-clipboard-list empty-icon" />
              <span>Add your first To Do!</span>
            </div>
          )}
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
