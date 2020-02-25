import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Item, ApplicationState } from '../types';
import * as itemsActions from '../store/actions/items';

interface StateProps {
  items: Item[]
}

interface DispatchProps {
  toggleItem(id: number): void
}

type Props = StateProps & DispatchProps;

class TodoList extends Component<Props> {
  handleSubmit = () => {
    console.log('Submit');
  };

  render() {
    const { items, toggleItem } = this.props;

    return (
      <section>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.complete ? <s>{item.text}</s> : item.text}
              <div>
                <button type="button" onClick={() => toggleItem(item.id)}>Toggle</button>
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
