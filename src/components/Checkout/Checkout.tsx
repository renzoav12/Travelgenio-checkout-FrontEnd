import React, { FunctionComponent, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { RoomGuest } from './Rooms/Room/Room';
import Rooms from './Rooms/Rooms';
import Breakdown from './breakdown/Breakdown';
import Product, { ProductProps } from './Product/Product';
import CircularProgress from '@material-ui/core/CircularProgress';

export interface CheckoutProps {
  product: ProductProps;
  loading: boolean;
  roomsLoading: boolean;
  onSubmit: (guests: Array<RoomGuest>) => void;
  onLoad: (id: string) => void;
}

export interface CheckoutState {
  guests: Array<RoomGuest>;
  validRooms: Array<boolean>;
  enableSubmit: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    product: {
      marginTop:20
    },
    rooms: {
      marginTop:20
    },
    pay: {
      marginTop:20
    },
    buttonGrid: {
      paddingTop: 20,
      paddingBottom: 70,
      textAlign: "right"
    },
    continueButton: {
      width: "223px",
      height: "50px",
    },
  }),
);

const Checkout: FunctionComponent<CheckoutProps> = props => {
  const classes = useStyles();

  const [guests, setGuests] = useState<Array<RoomGuest>>(new Array(props.product.quantity));
  const [validRooms, setValidRooms] = useState<Array<boolean>>(new Array(props.product.quantity));
  const [enableSubmit, setEnableSubmit] = useState<boolean>(false);
  
  const onChange = (guest: RoomGuest, index: number, isRoomValid: boolean): void => {
    let prevGuests: Array<RoomGuest> = guests;
    let prevValidRooms: Array<boolean> = validRooms;
    prevGuests[index] = guest;
    prevValidRooms[index] = isRoomValid;
    setGuests(prevGuests);
    setValidRooms(prevValidRooms);
    setEnableSubmit(prevValidRooms.every(valid => valid));
  }

  const onSubmit = (): void => {
    props.onSubmit(guests);
  }

  return <Grid container>
    <Grid container item 
      xs={12}
      direction="column" 
      justify="flex-start" 
      alignItems="center"
      className = {classes.product}>
        <Product {...props.product} roomsLoading={props.roomsLoading}/>
    </Grid>
    <Grid container item xs={12} className = {classes.rooms}>
      {!props.roomsLoading && <Rooms quantity={props.product.quantity} loading={props.loading} onChange={onChange}/>}
    </Grid>
    <Grid container item 
      xs={12}
      direction="column" 
      justify="flex-start" 
      alignItems="center"
      className = {classes.pay}>
      {!props.roomsLoading && <Breakdown {...props.product}/>}
    </Grid>
    <Grid item xs={12} className={classes.buttonGrid}>
      <Button variant="contained" color="primary" disabled={props.roomsLoading || props.loading || !enableSubmit} className={classes.continueButton} onClick={onSubmit}>
        {props.loading ? <CircularProgress color="primary" size={25}/> :"Continuar"}
      </Button>
    </Grid>
  </Grid>;
}

export default Checkout;