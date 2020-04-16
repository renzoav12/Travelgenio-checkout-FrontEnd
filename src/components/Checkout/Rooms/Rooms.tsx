import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Room from './Room/Room';
import { RoomGuest } from './Room/Room';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface RoomsProps {
  quantity: number;
  loading: boolean;
  onChange: (guest: RoomGuest, index: number, isRoomValid: boolean) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    room: {
      marginTop:20
    }
  }),
);

const Rooms: FunctionComponent<RoomsProps> = props => {

  const classes = useStyles();

  let rooms: Array<JSX.Element> = [];
  
  const room = (index: number, loading: boolean,
      onChange: (guest: RoomGuest,
      index: number, isRoomValid: boolean) => void) => <Paper key = {index} className={classes.room}>
    <Room
      guest={{name:"",
      lastName: "",
      email: "",
      phone: {countryCode:"", areaCode:"", number: ""}
      }} 
      roomNumber = {index+1} 
      loading = {loading}
      onChange = {(guest: RoomGuest, isRoomValid: boolean):void => {onChange(guest, index, isRoomValid)}} 
      />
  </Paper>;

  for (let index:number = 0; index < props.quantity; index++) {
    rooms.push(room(index, props.loading, props.onChange));
  }

  return <Grid container item xs={12}>
    {rooms}
  </Grid>;
}

export default Rooms;