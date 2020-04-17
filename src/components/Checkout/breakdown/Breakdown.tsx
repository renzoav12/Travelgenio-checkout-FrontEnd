import React, { FunctionComponent } from 'react';
import { Typography, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ProductProps, BreakdownCharge } from '../Product/Product';
import Occupancy from '../Product/Occupancy/Occupancy';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "100%"
    },
    item: {
      display: "flex",
      justifyContent: "flex-end"
    },
    itemLabel: {
    },
    itemPrice: {
      width: 150,
      textAlign: "right"
    },
    total: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: 10,
      paddingTop: 10,
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderTopColor: theme.palette.divider
    },
    totalLabel: {
    },
    totalPrice: {
      width: 150,
      textAlign: "right"
    },
  }),
);

const Breakdown: FunctionComponent<ProductProps> = props => {
  const classes = useStyles();

  const baseRateCharge: BreakdownCharge = props.breakdown.charges.filter(charge => charge.type.code === "BASE_RATE" )[0];
  const otherCharges: Array<BreakdownCharge> = props.breakdown.charges.filter(charge => charge.type.code !== "BASE_RATE" );

  const baseRate: JSX.Element | null =  baseRateCharge ? <Box className={classes.item}>
    <Typography variant="subtitle1" className={classes.itemLabel}>Tarifa</Typography>
    <Typography variant="subtitle1" className={classes.itemPrice}>{baseRateCharge.price.amountText} {baseRateCharge.price.currency}</Typography>
  </Box> : null;

  const charges: Array<JSX.Element> = otherCharges.map((charge, index) => { return <Box className={classes.item} key={index}>
      <Typography variant="subtitle2" className={classes.itemLabel}>{charge.type.description}</Typography>
      <Typography variant="subtitle2" className={classes.itemPrice}>{charge.price.amountText} {charge.price.currency}</Typography>
    </Box>});

  return <Paper className={classes.paper}>
      {baseRate}
      {charges}
      <Box className={classes.total}>
        <Typography variant="h1" className={classes.totalLabel}>Total a pagar</Typography>
        <Typography variant="h1" className={classes.totalPrice}>{props.pay.price.amountText} {props.pay.price.currency}</Typography>
      </Box>
  </Paper>;
}

export default Breakdown;