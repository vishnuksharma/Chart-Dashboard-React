import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { makeSelectChartTypes, makeSelectedChartTypes, makeSelectLoading } from "./selectors";
import ChartTypesList from "../components/ChartTypesList";

const mapStateToProps = createStructuredSelector({
    chartTypes: makeSelectChartTypes,
    selectedChartTypes: makeSelectedChartTypes,
    isLoading: makeSelectLoading
});

const mapDispatchToProps = () => {
  return {};
};

export default compose<any>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  React.memo
)(ChartTypesList);
