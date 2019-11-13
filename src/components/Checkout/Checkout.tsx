import React, { Component } from 'react';
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
  orderId: string;
  order: Order;
  onSubmit: (guests: Array<RoomGuest>) => void;
  onLoad: (id: string) => void;
}

export interface Order {
  id: string;
  pay: PayProps;
  product: ProductProps;
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
  }),
);

class Checkout extends Component<CheckoutProps, CheckoutState> {
  constructor(props:CheckoutProps) {
    super(props);

    let guests: Array<RoomGuest> = [];

    for(let index:number = 0; index < props.order.product.rooms.quantity; index ++) {
      guests.push({name:"",
      lastName: "",
      email: "",
      phone: {countryCode:"", areaCode:"", number: ""}
      });
    }

    this.state = {guests:guests};

    this.onSubmit.bind(this);
  }

  onChange = (guest: RoomGuest, index: number): void => {
    this.setState((prevState: CheckoutState) => {
      let guests: Array<RoomGuest> = prevState.guests;
      guests[index] = guest;
      return {guests: guests};
    }); 
  }

  onSubmit = (): void => {
    console.info(this.state.guests);
    this.props.onSubmit(this.state.guests);
  }

  render = () => {
    return <Grid container>
          <Grid container item xs={12}>
            <Paper>
              <Typography variant="h1">Checkout</Typography>
            </Paper>
          </Grid>
          <Grid container item  xs={12} md={6} lg={8}>
           <Rooms quantity={this.props.order.product.rooms.quantity} onChange={this.onChange}/>
          </Grid>
          <Grid container item 
            xs={12} md={6} lg={4} 
            direction="column" 
            justify="flex-start" 
            alignItems="center">
              <Pay {...this.props.order.pay}/>
              <Product {...this.props.order.product}/>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={this.onSubmit}>Continuar</Button>
          </Grid>
        </Grid>;
  }
}

export default Checkout;