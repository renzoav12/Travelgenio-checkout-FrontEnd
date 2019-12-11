import React, { SFC } from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Category from '../../Category';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Description from '../../Description';
import KingBedIcon from '@material-ui/icons/KingBed';
import PersonIcon from '@material-ui/icons/Person';
import TodayIcon from '@material-ui/icons/Today';
import { PayProps } from '../Pay/Pay';

export interface ProductProps {
  id: string;
  accommodation: Accommodation;
  pay: PayProps;
  stay: Stay;
  mealPlan: MealPlan;
  cancelPolicy: string;
  room: Room;
  quantity: number;
}

export interface Accommodation {
  id: string
  category: Category;
  image: Image;
  name: string;
  location: Location;
}

export interface Image {
  url: string;
}

export interface Category {
  code: string;
  name: string;
}

export interface Location {
  address: string;
  geoPosition: GeoPosition;
}

export interface GeoPosition {
  latitude: number;
  longitude: number;
}

export interface Stay {
  checkIn: CheckIn;
  checkOut: CheckOut;
  nights: number;
}

export interface CheckIn {
  date: string;
  beginTime: string;
  endTime: string;
}

export interface CheckOut {
  date: string;
  time: string;
}

export interface MealPlan {
  code: string;
  name: string;
}

export interface Room {
  name: string;
  description: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cancelPolicy: {
      color: "#028A51;"
    }
  }),
);

const Product: SFC<ProductProps> = props => {
  const classes = useStyles();
  
  return <Grid container>
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1">Tu selección</Typography>
        </Grid>
        <Grid container item xs={12} alignItems="center" spacing={1}>
          <Grid item>
            <Typography variant="h2">{props.accommodation.name}</Typography>
          </Grid>
          <Grid item>
            <Category stars={parseInt(props.accommodation.category.code)}/>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.cancelPolicy}>
            <Description text={props.cancelPolicy}/>
        </Grid>
        <Grid item xs={12}>
          <LocationOnIcon fontSize="small"/> {props.accommodation.location.address}
        </Grid>      
        <Grid item xs={12}>
          <KingBedIcon fontSize="small"/> {props.quantity} habitaciones. {props.room.description} | {props.mealPlan? props.mealPlan.name : 'Solo habitación'} 
        </Grid>      
        <Grid item xs={12}>
          <PersonIcon fontSize="small"/> Estancia de {props.stay.nights} noches.
        </Grid>      
        <Grid container item xs={12} alignItems="center" spacing={1}>
          <Grid item>
            <TodayIcon fontSize="small"/>
          </Grid>
          <Grid item>
            <Typography variant="h2">Entrada: {props.stay.checkIn.date}</Typography> 
          </Grid>
          <Grid item>
            | A partir de las {props.stay.checkIn.beginTime}
          </Grid>
          <Grid item>
            <Hidden xsDown>
              <Typography variant="h2"> - </Typography> 
            </Hidden>
          </Grid>
          <Grid item>
            <Typography variant="h2">Salida: {props.stay.checkOut.date}</Typography> 
          </Grid>
          <Grid item>
            | Hasta las {props.stay.checkIn.beginTime}
          </Grid>
        </Grid>      
      </Grid>
    </Paper>
  </Grid>;
}

export default Product;