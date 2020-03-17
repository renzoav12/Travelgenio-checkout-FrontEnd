import React, { FunctionComponent } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ProductProps } from '../Product/Product';

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

const Breakdown: FunctionComponent<ProductProps> = props => {
  const classes = useStyles();

  return <Grid container>
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="subtitle1">{props.stay.nights} noches</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" align="right">{props.breakdown.payWithoutTax.amountText} {props.breakdown.payWithoutTax.currency}</Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Impuestos</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" align="right">{props.breakdown.tax.amountText} {props.breakdown.tax.currency}</Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h1">Total a pagar</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h1" align="right">{props.pay.price.amountText} {props.pay.price.currency}</Typography>
        </Grid>
      </Grid>
    </Paper>
  </Grid>;
}

export default Breakdown;