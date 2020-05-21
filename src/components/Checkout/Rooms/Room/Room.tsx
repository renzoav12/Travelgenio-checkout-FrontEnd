import React,  { FunctionComponent, useState } from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import OtravoTextField from './OtravoTextField';
import EmailField from './EmailField';
import NumberField from './NumberField';
import Keys from "@hotels/translation-keys";
import Translate, {translate} from "@hotels/translation";
import PropTypes from "prop-types";


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


const Room: FunctionComponent<RoomProps> = (props, context) => {

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
      <Typography variant="h1"><Translate tkey={Keys.common.room}/> {props.roomNumber}</Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <OtravoTextField
        id="name"
        label={translate(context,Keys.checkout.firstname)}
        value={props.guest.name}
        required={true}
        onChange={onChangeName}
        maxLength={100}
        minLength={1}
      />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <OtravoTextField
        id="lastName"
        label={translate(context,Keys.checkout.lastname)}
        value={props.guest.lastName}
        required={true}
        onChange={onChangeLastName}
        maxLength={100}
        minLength={1}
      />
    </Grid>
    <Hidden smDown>
      <Grid item md={4}></Grid>
    </Hidden>
    <Grid item xs={8} sm={4} md={2}>
      <NumberField
        id="phoneCountry"
        label={translate(context, Keys.checkout.phone_country_code)}
        value = {props.guest.phone.countryCode}
        required={true}
        onChange={onChangeCountryCode}
        maxLength={5}
        minLength={1}
      />
    </Grid>
    <Grid item xs={4} sm={3} md={2}>
      <NumberField
        id="phoneArea"
        label={translate(context,Keys.checkout.phone_area_code)}
        value = {props.guest.phone.areaCode}
        required={true}
        onChange={onChangeAreaCode}
        maxLength={5}
        minLength={1}
      />
    </Grid>
    <Grid item xs={12} sm={5} md={4}>
      <NumberField
        id="phoneNumber"
        label={translate(context, Keys.checkout.phone_number)}
        value = {props.guest.phone.number}
        required={true}
        onChange={onChangePhoneNumber}
        maxLength={15}
        minLength={7}
      />
    </Grid>
    <Hidden smDown>
      <Grid item md={4}></Grid>
    </Hidden>
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <EmailField
        id="email"
        label={translate(context, Keys.checkout.email)}
        value = {props.guest.email}
        required={true}
        onChange={onChangeEmail}
        maxLength={100}
      />
    </Grid>
  </Grid>;
}

Room.contextTypes = { t: PropTypes.func };

export default Room;