import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as filterActions from '../store/actions/filter';
import { ApplicationState } from '../types';

interface StateProps {
  filterSelected: boolean
}

interface DispatchProps {
  updateFilter(filter: string): void
}

interface OwnProps {
  children: string,
  filter: string
}

type Props = StateProps & DispatchProps & OwnProps;

const FilterLink = ({
  children,
  updateFilter,
  filter,
  filterSelected,
}: Props) => (
  <span
    role="presentation"
    onClick={() => updateFilter(filter)}
    className={filterSelected ? 'active' : ''}
  >
    {children}
  </span>
);

const mapStateToProps = ({ filterState }: ApplicationState, { filter }: OwnProps) => ({
  filterSelected: filterState === filter,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(filterActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterLink);
