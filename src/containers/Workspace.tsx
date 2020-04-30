import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchChartTypes, getChartData } from "../redux/actions";
import { createStructuredSelector } from "reselect";
import {
  makeSelectLoading,
  makeSelectChartData,
  makeSelectNoOfDatasets,
  makeSelectChartTypes,
  makeSelectChartDataLoading,
  makeSelectedChartTypes
} from "./selectors";
import Workspace from "../components/Workspace";

const mapStateToProps = createStructuredSelector({
  chartDataItems: makeSelectChartData,
  isLoading: makeSelectLoading,
  noOfDatasets: makeSelectNoOfDatasets,
  chartTypes: makeSelectChartTypes,
  isChartDataLoading: makeSelectChartDataLoading,
  selectedChartTypes: makeSelectedChartTypes
});

const mapDispatchToProps = dispatch => {
  return {
    fetchChartTypes: () => dispatch(fetchChartTypes()),
    getChartData: noOfDatasets => dispatch(getChartData(noOfDatasets))
  };
};

export default compose<any>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  React.memo
)(Workspace);
