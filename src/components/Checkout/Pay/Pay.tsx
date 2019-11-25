import React, { SFC } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

export interface PayProps {
  price: Price;
}

export interface Price {
  amount: string;
  currency: string;
}

const Pay: SFC<PayProps> = props => {
  return <Grid container>
    <Paper>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h1">Total a pagar</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h1" align="right">{props.price.amount} {props.price.currency}</Typography>
        </Grid>
      </Grid>
    </Paper>
  </Grid>;
}

export default Pay;