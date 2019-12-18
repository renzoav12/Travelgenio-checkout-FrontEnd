import React,  { SFC, useState } from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import OtravoTextField from './OtravoTextField';
import EmailField from './EmailField';
import NumberField from './NumberField';

export interface RoomProps {
  roomNumber: number; 
  guest: RoomGuest;
  loading: boolean;
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


const Room: SFC<RoomProps> = props => {

  const [guest, setGuest] = useState<GuestState>({
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
    }});

  const onChangeName = (value: string, valid: boolean): void => {
      let prevGuest: GuestState = {...guest};
      prevGuest.guest.name = value;
      prevGuest.validation.name = valid;

      props.onChange(prevGuest.guest, isFormRoomValid(prevGuest.validation));      

      setGuest(prevGuest);
  }

  const onChangeLastName = (value: string, valid: boolean): void => {
      let prevGuest: GuestState = {...guest};

      prevGuest.guest.lastName = value;
      prevGuest.validation.lastName = valid;

      props.onChange(prevGuest.guest, isFormRoomValid(prevGuest.validation));      

      setGuest(prevGuest);
  }

  const onChangeEmail = (value: string, valid: boolean): void => {
      let prevGuest: GuestState = {...guest};

      prevGuest.guest.email = value;
      prevGuest.validation.email = valid;

      props.onChange(prevGuest.guest, isFormRoomValid(prevGuest.validation));      

      setGuest(prevGuest);
  }

  const onChangeCountryCode = (value: string, valid: boolean): void => {
      let prevGuest: GuestState = {...guest};

      prevGuest.guest.phone.countryCode = value;
      prevGuest.validation.phone.countryCode = valid;

      props.onChange(prevGuest.guest, isFormRoomValid(prevGuest.validation));      

      setGuest(prevGuest);
  }

  const onChangeAreaCode = (value: string, valid: boolean): void => {
      let prevGuest:GuestState = {...guest};

      prevGuest.guest.phone.areaCode = value;
      prevGuest.validation.phone.areaCode = valid;

      props.onChange(prevGuest.guest, isFormRoomValid(prevGuest.validation));      

      setGuest(prevGuest);
  }

  const onChangePhoneNumber = (value: string, valid: boolean): void => {
      let prevGuest:GuestState = {...guest};

      prevGuest.guest.phone.number = value;
      prevGuest.validation.phone.number = valid;

      props.onChange(prevGuest.guest, isFormRoomValid(prevGuest.validation));      

      setGuest(prevGuest);
  }

  const isFormRoomValid = (validation: RoomValidation): boolean => {
    return validation.name
        && validation.lastName
        && validation.email
        && validation.phone.countryCode
        && validation.phone.areaCode
        && validation.phone.number;
  }

  return <Grid container spacing={2} >
    <Grid item xs={12}>
      <Typography variant="h1">Habitación {props.roomNumber}</Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <OtravoTextField
        id="name"
        label="Nombre"
        value={props.guest.name}
        required={true}
        onChange={onChangeName}
        maxLength={30}
      />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <OtravoTextField
        id="lastName"
        label="Apellido"
        value={props.guest.lastName}
        required={true}
        onChange={onChangeLastName}
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
        value = {props.guest.phone.countryCode}
        required={true}
        onChange={onChangeCountryCode}
        maxLength={5}
      />
    </Grid>
    <Grid item xs={4} sm={3} md={2}>
      <NumberField
        id="phoneArea"
        label="Código Area"
        value = {props.guest.phone.areaCode}
        required={true}
        onChange={onChangeAreaCode}
        maxLength={10}
      />
    </Grid>
    <Grid item xs={12} sm={5} md={4}>
      <NumberField
        id="phoneNumber"
        label="Nro. Teléfono"
        value = {props.guest.phone.number}
        required={true}
        onChange={onChangePhoneNumber}
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
        value = {props.guest.email}
        required={true}
        onChange={onChangeEmail}
        maxLength={50}
      />
    </Grid>
  </Grid>;
}

export default Room;