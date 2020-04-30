import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from '@material-ui/core/Paper';
import MenuItem from "@material-ui/core/MenuItem";
import Dashboard from "./Dashboard";

interface Props {
  getChartData: (noOfDatasets) => any;
  fetchChartTypes: () => any;
  chartDataItems: [];
  noOfDatasets: number;
  isChartDataLoading: boolean;
  selectedChartTypes: [];
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  buttonText: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1)
  },
  paper: {
    height: 140,
    width: 100
  },
  center: {
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 'auto',
    // width: 250,
    padding: 10,
    width: 'auto'
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const Workspace: React.FC<Props> = ({
  fetchChartTypes,
  getChartData,
  chartDataItems,
  isChartDataLoading,
  selectedChartTypes
}) => {
  const classes = useStyles({});
  const [noOfDatasets, setNoOfDatasets] = React.useState(1);

  React.useEffect(() => {
    getChartData(noOfDatasets);

  }, [noOfDatasets]);

  React.useEffect(() => {
    fetchChartTypes();
  }, []);

  const selectStyle = {
    // display: "inline-flex"
    marginBottom: 20,
    width: 200
  };

  const handleChange = event => {
    setNoOfDatasets(event.target.value);
    //getChartData(event.target.value);
  };
  
  return (
    <div>
      <div>{isChartDataLoading}</div>
      {selectedChartTypes.length > 0 && <div style={selectStyle}>
          <InputLabel htmlFor="age">No. of Datasets</InputLabel>
          <Select
            fullWidth
            value={noOfDatasets}
            onChange={handleChange}
            inputProps={{
              name: "datasets",
              id: "datasets"
            }}
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
          </Select>
        </div>}
        {!selectedChartTypes.length && <Paper className={classes.center} >
          <div className={classes.buttonText}>{"Please select a chart to display."}</div>
        </Paper>}
      <div>
        <Dashboard
          chartDataItems={chartDataItems}
          renderTypes={selectedChartTypes}
          isChartDataLoading={isChartDataLoading}
        />
      </div>
    </div>
  );
};

export default Workspace;
