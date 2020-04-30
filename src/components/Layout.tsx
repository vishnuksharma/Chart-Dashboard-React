import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ChartTypesList from "../containers/ChartTypesList";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center" as any,
    color: theme.palette.text.secondary
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles({});

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Chart Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.content}>
          <Container maxWidth="xl">
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <ChartTypesList />
                </Paper>
              </Grid>
              <Grid item xs={9}>
                {children}
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom />
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Copyright 2019 | UOB - All rights reserved
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default Layout;
