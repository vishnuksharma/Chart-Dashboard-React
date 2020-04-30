interface ChartTypeItems {
  chartTypeId: number;
  content: String;
}

export default interface State {
  chartTypes: ChartTypeItems[];
  selectedChartTypes: ChartTypeItems[];
  isLoading: boolean;
  isChartDataLoading: boolean;
  chartItems: [];
  noOfDatasets: number;
}
