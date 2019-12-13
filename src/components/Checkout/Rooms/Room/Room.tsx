import React, { Component } from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import OtravoTextField from './OtravoTextField';
import EmailField from './EmailField';
import NumberField from './NumberField';


export interface RoomProps {
  roomNumber: number; 
  guest: RoomGuest;
  onChange: (guest: RoomGuest, valid: boolean) => void;
}

export interface RoomGuest {
  name: string;
  lastName: string; 
  email: string;
  phone: Phone;
}

export interface Phone {
  countryCode: string;
  areaCode: string;
  number: string;
}

export interface GuestState {
  guest: RoomGuest;
  validation: RoomValidation;
}

interface RoomValidation {
  name: boolean;
  lastName: boolean;
  email: boolean;
  phone: PhoneValidation;
}

interface PhoneValidation {
  countryCode: boolean;
  areaCode: boolean;
  number: boolean;
}

class Room extends Component<RoomProps, GuestState> {
  constructor(props) {
    super(props);
    this.state = {
      guest: props.guest,
      validation: {
        name: false,
        lastName: false,
        email: false,
        phone: {
          countryCode: false,
          areaCode: false,
          number: false
        }
      }
    };
  }

  onChangeName = (value: string, valid: boolean): void => {
    this.setState((prevState: GuestState) => {
      let state:GuestState = {...prevState};

      console.info(`${value} -> ${valid}`);

      state.guest.name = value;
      state.validation.name = valid;

      this.props.onChange(state.guest, this.isFormRoomValid(state.validation));      

      return state;
    });
  }

  onChangeLastName = (value: string, valid: boolean): void => {
    this.setState((prevState: GuestState) => {
      let state:GuestState = {...prevState};

      state.guest.lastName = value;
      state.validation.lastName = valid;

      this.props.onChange(state.guest, this.isFormRoomValid(state.validation));      

      return state;
    });
  }

  onChangeEmail = (value: string, valid: boolean): void => {
    this.setState((prevState: GuestState) => {
      let state:GuestState = {...prevState};

      state.guest.email = value;
      state.validation.email = valid;

      this.props.onChange(state.guest, this.isFormRoomValid(state.validation));      

      return state;
    });
  }

  onChangeCountryCode = (value: string, valid: boolean): void => {
    this.setState((prevState: GuestState) => {
      let state:GuestState = {...prevState};

      state.guest.phone.countryCode = value;
      state.validation.phone.countryCode = valid;

      this.props.onChange(state.guest, this.isFormRoomValid(state.validation));      

      return state;
    });
  }

  onChangeAreaCode = (value: string, valid: boolean): void => {
    this.setState((prevState: GuestState) => {
      let state:GuestState = {...prevState};

      state.guest.phone.areaCode = value;
      state.validation.phone.areaCode = valid;

      this.props.onChange(state.guest, this.isFormRoomValid(state.validation));      

      return state;
    });
  }

  onChangePhoneNumber = (value: string, valid: boolean): void => {
    this.setState((prevState: GuestState) => {
      let state:GuestState = {...prevState};

      state.guest.phone.number = value;
      state.validation.phone.number = valid;

      this.props.onChange(state.guest, this.isFormRoomValid(state.validation));      

      return state;
    });
  }

  isFormRoomValid = (validation: RoomValidation): boolean => {
    return validation.name
        && validation.lastName
        && validation.email
        && validation.phone.countryCode
        && validation.phone.areaCode
        && validation.phone.number;
  }
  render = () => {
    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">Habitación {this.props.roomNumber}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OtravoTextField
          id="name"
          label="Nombre"
          value={this.props.guest.name}
          required={true}
          onChange={this.onChangeName}
          maxLength={30}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OtravoTextField
          id="lastName"
          label="Apellido"
          value={this.props.guest.lastName}
          required={true}
          onChange={this.onChangeLastName}
          maxLength={30}
        />
      </Grid>
      <Hidden smDown>
        <Grid item md={4}></Grid>
      </Hidden>
      <Grid item xs={8} sm={4} md={2}>
        <NumberField
          id="phoneCountry"
          label="Código País"
          value = {this.props.guest.phone.countryCode}
          required={true}
          onChange={this.onChangeCountryCode}
          maxLength={5}
        />
      </Grid>
      <Grid item xs={4} sm={3} md={2}>
        <NumberField
          id="phoneArea"
          label="Código Area"
          value = {this.props.guest.phone.areaCode}
          required={true}
          onChange={this.onChangeAreaCode}
          maxLength={10}
        />
      </Grid>
      <Grid item xs={12} sm={5} md={4}>
        <NumberField
          id="phoneNumber"
          label="Nro. Teléfono"
          value = {this.props.guest.phone.number}
          required={true}
          onChange={this.onChangePhoneNumber}
          maxLength={20}
        />
      </Grid>
      <Hidden smDown>
        <Grid item md={4}></Grid>
      </Hidden>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <EmailField
          id="email"
          label="Email"
          value = { this.props.guest.email}
          required={true}
          onChange={this.onChangeEmail}
          maxLength={50}
        />
      </Grid>
    </Grid>;
  }
}

export default Room;