import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Guest from './Guest';
import { GuestProps, RoomGuest } from './Guest/Guest';

export interface CheckoutProps {
  id: string;
  guests: Array<RoomGuest>;
  onSubmit: (guests: Array<RoomGuest>) => void;
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
    this.state = {
      guests:props.guests
    }
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
    this.props.onSubmit(this.state.guests);
  }

  render = () => {
    let guests = this.props.guests.map((guest, index) => 
      <Guest 
        guest={guest} 
        roomNumber = {index+1} 
        onChange = {(guest: RoomGuest):void => {this.onChange(guest, index)}} 
        key = {index}/>);

    return <Grid container>
           <Grid container item xs={12}>
            <Paper>
               <Typography variant="h1">Huéspedes</Typography>
            </Paper>
           </Grid>
          <Grid item container xs={12}>
            {guests}
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={this.onSubmit}>Siguiente</Button>
          </Grid>
        </Grid>;
  }
}

export default Checkout;