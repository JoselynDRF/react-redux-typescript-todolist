import React, { FormEvent, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Item, ApplicationState } from '../types';
import * as itemsActions from '../store/actions/items';

interface StateProps {
  items: Item[]
}

interface DispatchProps {
  addItem(text: string): void,
  toggleItem(id: number): void,
  removeItem(id: number): void
}

type Props = StateProps & DispatchProps;

const TodoList = (props: Props) => {
  const {
    items,
    addItem,
    toggleItem,
    removeItem,
  } = props;

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
          <input ref={inputText} placeholder="Add a task..." />
          <button type="submit">
            <i className="fas fa-plus" />
          </button>
        </form>
        <ul className="items">
          {items.map((item) => (
            <li key={item.id}>
              <div className="check-item-container">
                <div
                  onClick={() => toggleItem(item.id)}
                  role="presentation"
                  className={item.complete ? 'checkbox-item checked' : 'checkbox-item'}
                />
                <span>{item.complete ? <s>{item.text}</s> : item.text}</span>
              </div>

              <div>
                <span className="icon" role="presentation" onClick={() => toggleItem(item.id)}>
                  <i className="fas fa-pencil-alt" />
                </span>
                <span className="icon" role="presentation" onClick={() => removeItem(item.id)}>
                  <i className="fas fa-trash-alt" />
                </span>
              </div>
            </li>
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
