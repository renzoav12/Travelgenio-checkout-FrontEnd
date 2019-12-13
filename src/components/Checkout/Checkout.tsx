import React, { SFC, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { RoomGuest } from './Rooms/Room/Room';
import Rooms from './Rooms';
import Pay from './Pay';
import Product from './Product';
import { ProductProps } from './Product/Product';
import { PayProps } from './Pay/Pay';

export interface CheckoutProps {
  product: ProductProps;
  onSubmit: (guests: Array<RoomGuest>) => void;
  onLoad: (id: string) => void;
}

export interface CheckoutState {
  guests: Array<RoomGuest>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonGrid: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      textAlign: "right"
    },
    continueButton: {
      width: "223px",
      height: "50px",
    }
  }),
);

const Checkout: SFC<CheckoutProps> = props => {
  const classes = useStyles();

  const [guests, setGuests] = useState<Array<RoomGuest>>(new Array(props.product.quantity));
  
  const onChange = (guest: RoomGuest, index: number): void => {
    let prevGuests: Array<RoomGuest> = guests;
    prevGuests[index] = guest;
    setGuests(prevGuests);
  }

  const onSubmit = (): void => {
    props.onSubmit(guests);
  }

  return <Grid container>
    <Grid container item 
      xs={12}
      direction="column" 
      justify="flex-start" 
      alignItems="center">
        <Product {...props.product}/>
    </Grid>
    <Grid container item  xs={12}>
      <Rooms quantity={props.product.quantity} onChange={onChange}/>
    </Grid>
    <Grid container item 
      xs={12}
      direction="column" 
      justify="flex-start" 
      alignItems="center">
        <Pay {...props.product.pay}/>
    </Grid>
    <Grid item xs={12} className={classes.buttonGrid}>
      <Button variant="contained" color="primary" className={classes.continueButton} onClick={onSubmit}>Continuar</Button>
    </Grid>
  </Grid>;
}

export default Checkout;