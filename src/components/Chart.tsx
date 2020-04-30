import * as React from "react";
import GoogleChart, { Chart as GChart } from "react-google-charts";
import { Grid } from "@material-ui/core";

interface Props {
  data?: any;
  type?: any;
}

const Chart: React.FC<Props> = ({ data, type }) => {
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item xs={12}>
        {/* <GoogleChart chartType={type} width="600px" height="400px" data={data} /> */}
        <GChart
          width={'100%'}
          height={'400px'}
          chartType={type}
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            title: 'Company Performance',
            hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
            vAxis: { minValue: 0, title: ""},
            // For the legend to fit, we make the chart area smaller
            chartArea: { width: '60%', height: '70%' },
            
            // lineWidth: 25
          }}
          // For tests
          rootProps={{ 'data-testid': '1' }}
        />
      </Grid>
    </Grid>
  );
};

export default Chart;
