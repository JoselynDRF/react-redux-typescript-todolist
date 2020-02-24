import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '../store/actions/items';

class TodoList extends Component<any> {
  handleSubmit = () => {
    console.log('Submit');
  };

  render() {
    const { items, toggleItem } = this.props;

    return (
      <section>
        <ul>
          {items.map((item: any) => (
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

const mapStateToProps = (state: any) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(itemsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
