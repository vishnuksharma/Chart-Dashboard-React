import * as React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ChartTypeItem from '../containers/ChartTypeItem';
import Loading from './Loading';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

interface Props {
    chartTypes: any[];
    selectedChartTypes: any[];
    isLoading: boolean;
  }

export default function ChartTypesList(props:Props) {
  const classes = useStyles({});

  const isExist = (val) => {
      return props.selectedChartTypes.some(item => val.name === item.name);
    }

  let elements = props.chartTypes.map(function(item){
    return <ChartTypeItem key={item.id} data={item} isSelected={isExist(item)}/>
  });
  return (
    <List subheader={<ListSubheader>Chart Types</ListSubheader>} className={classes.root}>
        {props.isLoading && <Loading />}
        {elements}
    </List>
  );
}