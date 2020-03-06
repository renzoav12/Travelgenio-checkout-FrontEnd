import React, { FunctionComponent } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface PayProps {
  price: Price;
}

export interface Price {
  amount: string;
  amountText: string;
  currency: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '100%'
    }
  }),
);

const Pay: FunctionComponent<PayProps> = props => {
  const classes = useStyles();

  return <Grid container>
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h1">Total a pagar</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h1" align="right">{props.price.amountText} {props.price.currency}</Typography>
        </Grid>
      </Grid>
    </Paper>
  </Grid>;
}

export default Pay;