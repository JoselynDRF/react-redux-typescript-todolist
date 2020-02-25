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
    <section>
      <form onSubmit={submitHandler}>
        <input ref={inputText} />
        <button type="submit">Novo</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.complete ? <s>{item.text}</s> : item.text}
            <div>
              <button type="button" onClick={() => toggleItem(item.id)}>Toggle</button>
              <button type="button" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
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
