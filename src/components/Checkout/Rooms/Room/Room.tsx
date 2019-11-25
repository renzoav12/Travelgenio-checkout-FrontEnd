import React, { Component } from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import OtravoTextField from './OtravoTextField';
import EmailField from './EmailField';
import NumberField from './NumberField';
import PhoneNumberField from './PhoneNumberField';


export interface RoomProps {
  roomNumber: number; 
  guest: RoomGuest;
  onChange: (guest: RoomGuest) => void;
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
}

class Room extends Component<RoomProps, GuestState> {
  constructor(props) {
    super(props);
    this.state = {
      guest: props.guest
    };
  }

  onChangeName = (value: string): void => {
    this.setState((prevState: GuestState) => {
      let guest: RoomGuest = {
        name: value,
        lastName: prevState.guest.lastName,
        email: prevState.guest.email,
        phone: {
          countryCode: prevState.guest.phone.countryCode,
          areaCode: prevState.guest.phone.areaCode,
          number: prevState.guest.phone.number
        }
      };
      this.props.onChange(guest);      

      return { guest: guest };
    });
  }

  onChangeLastName = (value: string): void => {
    this.setState((prevState: GuestState) => {
      let guest: RoomGuest = {
        name: prevState.guest.name,
        lastName: value,
        email: prevState.guest.email,
        phone: {
          countryCode: prevState.guest.phone.countryCode,
          areaCode: prevState.guest.phone.areaCode,
          number: prevState.guest.phone.number
        }
      };
      
      this.props.onChange(guest);      

      return { guest: guest };
    });
  }

  onChangeEmail = (value: string): void => {
    this.setState((prevState: GuestState) => {
      let guest: RoomGuest = {
        name: prevState.guest.name,
        lastName: prevState.guest.name,
        email: value,
        phone: {
          countryCode: prevState.guest.phone.countryCode,
          areaCode: prevState.guest.phone.areaCode,
          number: prevState.guest.phone.number
        }
      };
      
      this.props.onChange(guest);      

      return { guest: guest };
    });
  }

  onChangeCountryCode = (value: string): void => {
    this.setState((prevState: GuestState) => {
      let guest: RoomGuest = {
        name: prevState.guest.name,
        lastName: prevState.guest.name,
        email: prevState.guest.email,
        phone: {
          countryCode: value,
          areaCode: prevState.guest.phone.areaCode,
          number: prevState.guest.phone.number
        }
      };
      
      this.props.onChange(guest);      

      return { guest: guest };
    });
  }

  onChangeAreaCode = (value: string): void => {
    this.setState((prevState: GuestState) => {
      let guest: RoomGuest = {
        name: prevState.guest.name,
        lastName: prevState.guest.name,
        email: prevState.guest.email,
        phone: {
          countryCode: prevState.guest.phone.countryCode,
          areaCode: value,
          number: prevState.guest.phone.number
        }
      };
      
      this.props.onChange(guest);      

      return { guest: guest };
    });
  }

  onChangePhoneNumber = (value: string): void => {
    this.setState((prevState: GuestState) => {
      let guest: RoomGuest = {
        name: prevState.guest.name,
        lastName: prevState.guest.name,
        email: prevState.guest.email,
        phone: {
          countryCode: prevState.guest.phone.countryCode,
          areaCode: prevState.guest.phone.areaCode,
          number: value
        }
      };
      
      this.props.onChange(guest);      

      return { guest: guest };
    });
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
        <PhoneNumberField
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