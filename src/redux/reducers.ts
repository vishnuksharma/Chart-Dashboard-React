import State from "./State";
import {
  FETCH_CHART_TYPES_SUCCESS,
  CHART_TYPE_SELECTED,
  CHART_TYPE_UNSELECTED,
  SET_LOADING,
  GET_CHART_DATA_SUCCESS,
  SET_CHART_DATA_LOADING
} from "./actions";

interface Actions {
  type: string;
  payload: any;
}

const initialState: State = {
  chartTypes: [],
  selectedChartTypes: [],
  isLoading: false,
  isChartDataLoading: false,
  noOfDatasets: 1,
  chartItems: []
};

const reducers = (state: State = initialState, actions: Actions) => {
  switch (actions.type) {
    case FETCH_CHART_TYPES_SUCCESS: {
      return { ...state, chartTypes: actions.payload };
    }

    case CHART_TYPE_SELECTED: {
      return {
        ...state,
        selectedChartTypes: [...state.selectedChartTypes, actions.payload]
      };
    }

    case CHART_TYPE_UNSELECTED: {
      return {
        ...state,
        selectedChartTypes: state.selectedChartTypes.filter(
          item => actions.payload !== item
        )
      };
    }

    case GET_CHART_DATA_SUCCESS: {
      return { ...state, chartDataItems: actions.payload };
    }

    case SET_LOADING: {
      return { ...state, isLoading: actions.payload };
    }

    case SET_CHART_DATA_LOADING: {
      console.log("inside set chart data loading : " + actions.payload);
      return { ...state, isChartDataLoading: actions.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducers;
