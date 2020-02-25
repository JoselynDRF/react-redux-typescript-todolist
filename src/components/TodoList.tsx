import React, { Component, FormEvent } from 'react';
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

class TodoList extends Component<Props> {
  inputText = React.createRef<HTMLInputElement>();

  handleSubmit = (e: FormEvent) => {
    const { addItem } = this.props;
    e.preventDefault();
    addItem(this.inputText.current?.value || '');
  };

  render() {
    const { items, toggleItem, removeItem } = this.props;

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input ref={this.inputText} />
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
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  items: state.items.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(itemsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
