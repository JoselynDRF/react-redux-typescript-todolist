import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import * as itemsActions from '../store/actions/items';
import { ApplicationState, Item, VisibilityFilters } from '../types';
import FilterLink from './FilterLink';

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
      <TodoForm
        emptyList={!items.length}
        addItem={addItem}
      />

      <ul className="items">
        {items.length
          ? (
            <>
              {items.map((item) => (
                <TodoItem
                  key={item.id}
                  item={item}
                  toggleItem={toggleItem}
                  toggleEditItem={toggleEditItem}
                  updateItem={updateItem}
                  removeItem={removeItem}
                />
              ))}
              <div className="filters-container">
                <span>3 tasks left</span>
                <div className="filters">
                  <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
                  <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
                  <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-list">
              <i className="fas fa-clipboard-list empty-icon" />
              <span>Add your first To Do!</span>
            </div>
          )}
      </ul>
    </div>
  </div>
);

const filterItems = (items: Item[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return items.filter((item) => !item.complete);
    case VisibilityFilters.SHOW_COMPLETED:
      return items.filter((item) => item.complete);
    default:
      return items;
  }
};

const mapStateToProps = (state: ApplicationState) => ({
  items: filterItems(state.items.data, state.filterState),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(itemsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
