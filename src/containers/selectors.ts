import { createSelector } from "reselect";

const selectState = state => state;

export const makeSelectedChartTypes = createSelector(
  selectState,
  state => state.selectedChartTypes || []
);

export const makeSelectChartTypes = createSelector(
  selectState,
  state => state.chartTypes || []
);

export const makeSelectChartData = createSelector(
  selectState,
  state => state.chartDataItems
);

export const makeSelectLoading = createSelector(
  selectState,
  state => state.isLoading
);

export const makeSelectChartDataLoading = createSelector(
  selectState,
  state => state.isChartDataLoading
);

export const makeSelectNoOfDatasets = createSelector(
  selectState,
  state => state.noOfDatasets
);
