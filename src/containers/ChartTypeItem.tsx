import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { chartTypeSelected, chartTypeUnselected } from "../redux/actions";
import { createStructuredSelector } from "reselect";
import ChartTypeItem from "../components/ChartTypeItem";

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = dispatch => {
  return {
    chartTypeSelected: (payload) => dispatch(chartTypeSelected(payload)),
    chartTypeUnselected: (payload) => dispatch(chartTypeUnselected(payload))
  };
};

export default compose<any>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  React.memo
)(ChartTypeItem);
