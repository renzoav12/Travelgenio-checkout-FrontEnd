import React, { SFC } from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Room from './Room';
import { RoomGuest } from './Room/Room';

export interface RoomsProps {
  quantity: number;
  onChange: (guest: RoomGuest, index: number, isRoomValid: boolean) => void;
}

const room = (index: number, onChange: (guest: RoomGuest, index: number, isRoomValid: boolean) => void) => <Paper key = {index}>
  <Room 
    guest={{name:"",
    lastName: "",
    email: "",
    phone: {countryCode:"", areaCode:"", number: ""}
    }} 
    roomNumber = {index+1} 
    onChange = {(guest: RoomGuest, isRoomValid: boolean):void => {onChange(guest, index, isRoomValid)}} 
    />
  </Paper>;

const Rooms: SFC<RoomsProps> = props => {
  let rooms: Array<JSX.Element> = [];

  for (let index:number = 0; index < props.quantity; index++) {
    rooms.push(room(index, props.onChange));
  }

  return <Grid container item xs={12}>
    {rooms}
  </Grid>;
}

export default Rooms;