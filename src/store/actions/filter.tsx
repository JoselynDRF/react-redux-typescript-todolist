import { VisibilityFilters } from '../../types';

export const updateFilter = (filter: string) => ({
  type: VisibilityFilters.UPDATE_FILTER,
  payload: {
    filter,
  },
});
