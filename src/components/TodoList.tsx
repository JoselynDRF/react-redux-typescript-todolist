import React, { FormEvent, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Item, ApplicationState } from '../types';
import * as itemsActions from '../store/actions/items';

import TodoItem from './TodoItem';

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
}: Props) => {
  const inputText = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (inputText && inputText.current) {
      addItem(inputText.current.value);
      inputText.current.value = '';
    }
  };

  return (
    <div className="todo-list">
      <div className="header">
        TodoList
      </div>

      <div className="content">
        <form onSubmit={submitHandler}>
          <input ref={inputText} placeholder="What needs to be done?" />
          <button type="submit">
            <i className="fas fa-plus" />
          </button>
        </form>
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
};

const mapStateToProps = (state: ApplicationState) => ({
  items: state.items.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(itemsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
