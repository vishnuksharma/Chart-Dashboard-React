
import * as React from "react";
import Paper from '@material-ui/core/Paper';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import BarChartIcon from '@material-ui/icons/BarChart';

interface Props {
    chartTypeSelected: ([]:any) => any;
    chartTypeUnselected: ([]:any) => any;
    data: any;
    isSelected: any;
  }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 1),
      margin: theme.spacing(1,1),
    },
  }),
);

export default function ChartTypeItem(props:Props) {
    const classes = useStyles({});

  const handleToggle = (value: any) => () => {
    if (!props.isSelected) {
        props.chartTypeSelected(props.data);
    } else {
        props.chartTypeUnselected(props.data);
    }
  };

  return (
    <Paper className={classes.root}>
      <ListItem>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText id={props.data.chartType} primary={props.data.name}/>
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle(props)}
            checked={props.isSelected}
          />
        </ListItemSecondaryAction>
      </ListItem>
      </Paper>
  );
}