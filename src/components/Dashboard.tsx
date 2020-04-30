import * as React from "react";
import Chart from "./Chart";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Loading from "./Loading";
import { Box, Typography } from "@material-ui/core";

interface Props {
  renderTypes: any[];
  chartDataItems: [];
  isChartDataLoading: boolean;
}

const Dashboard: React.FC<Props> = ({
  renderTypes,
  chartDataItems,
  isChartDataLoading
}) => {
  return (
    <div>
      {isChartDataLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ height: 450, width: 400 }}
        >
          <Loading />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {renderTypes.map(current => (
            <Grid key={current.id} item xs={12} sm={6} md={6}>
              <Card>
                <Chart type={current.chartType} data={chartDataItems} />
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Dashboard;
