import React, { SFC } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Category from '../../Category';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Description from '../../Description';

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  image: Image;
  category: Category;
  location: Location;
  stay: Stay;
  mealPlan: MealPlan;
  cancelPolicy: string;
  rooms: Rooms;
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

export interface Rooms {
  quantity: number;
  description: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    address: {
      marginTop: 10
    },
    checkInOutSection: {
      marginTop: 20,
      paddingTop: 20,
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderTopColor: theme.palette.divider,
      marginBottom: 20,
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: theme.palette.divider

    }

  }),
);

const Product: SFC<ProductProps> = props => {
  const classes = useStyles();
  
  return <Grid container>
    <Paper>
      <Grid container>
        <Grid container item xs={12} alignItems="flex-start" spacing={2}>
          <Grid item>
            <Typography variant="h1">{props.name}</Typography>
          </Grid>
          <Grid item>
            <Category stars={parseInt(props.category.code)}/>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.address}>
          <LocationOnIcon fontSize="small"/> {props.location.address}
        </Grid>      
        <Grid container item xs={12} className={classes.checkInOutSection}>
          <Grid item xs={6}>
            <Typography>Check In</Typography>
            <Typography variant="h2">{props.stay.checkIn.date}</Typography>
            <Typography>{props.stay.checkIn.beginTime}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Check Out</Typography>
            <Typography variant="h2">{props.stay.checkOut.date}</Typography>
            <Typography>{props.stay.checkOut.time}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
            <Description text={props.description}/>
        </Grid>
      </Grid>
    </Paper>
  </Grid>;
}

export default Product;