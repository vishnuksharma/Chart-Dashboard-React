export const SET_LOADING = "SET_LOADING";
export const FETCH_CHART_TYPES = "FETCH_CHART_TYPES";
export const FETCH_CHART_TYPES_SUCCESS = "FETCH_CHART_TYPES_SUCCESS";
export const CHART_TYPE_SELECTED = "CHART_TYPE_SELECTED";
export const CHART_TYPE_UNSELECTED = "CHART_TYPE_UNSELECTED";
export const GET_CHART_DATA = "GET_CHART_DATA";
export const SET_CHART_DATA_LOADING = "SET_CHART_DATA_LOADING";
export const GET_CHART_DATA_SUCCESS = "GET_CHART_DATA_SUCCESS";
export const API_GETCHART_TYPE = "api/getChartType";
export const API_GETCHART_DATA = "api/getChartData";

export function fetchChartTypes() {
  console.log("inside fetch action");
  return {
    type: FETCH_CHART_TYPES,
    payload: null
  };
}

export function chartTypeSelected(selectedType) {
  return {
    type: CHART_TYPE_SELECTED,
    payload: selectedType
  };
}

export function chartTypeUnselected(unselectedType) {
  return {
    type: CHART_TYPE_UNSELECTED,
    payload: unselectedType
  };
}

export function getChartData(noOfDatasets) {
  return {
    type: GET_CHART_DATA,
    payload: noOfDatasets
  };
}
