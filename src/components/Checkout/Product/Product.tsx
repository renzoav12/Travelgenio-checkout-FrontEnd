import React, { FunctionComponent } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Category from '../../Category/Category';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import KingBedIcon from '@material-ui/icons/KingBed';
import PersonIcon from '@material-ui/icons/Person';
import TodayIcon from '@material-ui/icons/Today';
import { PayProps } from '../Pay/Pay';
import Occupancy from './Occupancy/Occupancy';
import MealPlan from '../../MealPlan/MealPlan';
import ExtraCharges from './ExtraCharges/ExtraCharges';
import Skeleton from 'react-loading-skeleton';

export interface ProductProps {
  id: string;
  accommodation: Accommodation;
  pay: PayProps;
  stay: Stay;
  mealPlan: MealPlan;
  cancelPolicy: string;
  room: Room;
  quantity: number;
  occupancy: Occupancy;
  roomsLoading: boolean;
  extraCharges: ExtraCharges;
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
  type: string;
}

export interface Room {
  name: string;
  description: string;
}

export interface Occupancy {
  adults: number;
  children: number;
}

export interface ExtraCharges {
  total: Price;
  description: string;
  details: [Charge];
}

export interface Price {
  currency: string;
  amount: string;
}

export interface Charge {
  price: Price;
  description: string;
  type: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cancelPolicy: {
      color: "#028A51"
    },
    checkInOut: {
      display:"flex",
      alignItems: "center"
    },
    checkInOutIconPadding: {
      marginRight: 5
    },
    checkInOutTextPadding: {
      marginRight: 20
    },
    extraCharge: {
      marginRight: 5
    }
  }),
);

const Product: FunctionComponent<ProductProps> = props => {
  const begin24Hours = "00:00";
  const end24Hours = "23:59";
  const noneCheckinHour = "El alojamiento no informa sobre hora de checkin.";
  const noneCheckoutHour = "El alojamiento no informa sobre hora de checkout.";

  const classes = useStyles();

  const checkInHour = () => {
    if(props.stay.checkIn.beginTime == begin24Hours && props.stay.checkIn.endTime == end24Hours) {
      return <Box> Las 24 Hs.</Box>;  
    } else if(props.stay.checkIn.beginTime && props.stay.checkIn.endTime && props.stay.checkIn.beginTime != props.stay.checkIn.endTime) {
      return <Box>A partir de {props.stay.checkIn.beginTime} Hs. a {props.stay.checkIn.endTime} Hs.</Box>;
    } else if(props.stay.checkIn.beginTime) {
      return <Box>A partir de {props.stay.checkIn.beginTime} Hs.</Box>
    } else if(props.stay.checkIn.endTime) {
      return <Box>Hasta las {props.stay.checkIn.endTime} Hs.</Box>
    } else {
      return <Box>{noneCheckinHour}</Box>;
    }
  }
  
  const checkOutHour = () => {
    let checkoutTime = props.stay.checkOut && props.stay.checkOut.time ? `Hasta las ${props.stay.checkOut.time} Hs.` : noneCheckoutHour;
    return <Box>{checkoutTime}</Box>;
  }

  const location = <Box><LocationOnIcon fontSize="small"/> {props.accommodation.location.address}</Box>;

  const room = <Box><KingBedIcon fontSize="small"/>{props.quantity} habitaciones. {props.room.description}</Box>;

  const occupancy = <Box><PersonIcon fontSize="small"/> <Occupancy {...props.occupancy}/> | Estancia de {props.stay.nights} noches.</Box>;

  const checkin = <Box className={classes.checkInOut}>
                    <Box className={classes.checkInOutIconPadding}><TodayIcon fontSize="small"/></Box>
                    <Typography variant="h2" className={classes.checkInOutTextPadding}>Entrada: {props.stay.checkIn.date}</Typography> 
                    <Box className={classes.checkInOutTextPadding}>{checkInHour}</Box>
                  </Box>;

  const checkout = <Box className={classes.checkInOut}>
                    <Box className={classes.checkInOutIconPadding}><TodayIcon fontSize="small"/></Box>
                    <Typography variant="h2" className={classes.checkInOutTextPadding}>Salida: {props.stay.checkOut.date}</Typography> 
                    <Box className={classes.checkInOutTextPadding}>{checkOutHour}</Box>
                  </Box>;

  const extracharges = <Box className={classes.extraCharge}> 
                          <ExtraCharges {...props.extraCharges} />
                      </Box>;
  
  return <Grid container>
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1">Tu selección</Typography>
        </Grid>
        <Grid container item xs={12} alignItems="center" spacing={1}>
          <Grid item>
            {props.roomsLoading 
                ? <Skeleton height={20} width={300}/>
                :<Typography variant="h2">{props.accommodation.name}</Typography>}
          </Grid>
          <Grid item>
            <Category stars={parseInt(props.accommodation.category.code)}/>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.cancelPolicy}>
          {props.roomsLoading 
              ? <Skeleton height={20} width={400}/>
              : props.cancelPolicy}
        </Grid>
        <Grid item xs={12}>
          {props.roomsLoading 
              ? <Skeleton height={30} width={350}/>
              : <MealPlan {...props.mealPlan} />}
        </Grid>
        <Grid item xs={12}>
          {props.roomsLoading 
              ? <Skeleton height={20} width={350}/>
              : location}
        </Grid>      
        <Grid item xs={12} sm={4} md={3} lg={2} xl={1}>
        {props.roomsLoading 
              ? <Skeleton height={20} width={150}/>
              : room}
        </Grid>      
        <Grid item xs={12}  sm={8} md={9} lg={10} xl={11}>
          {props.roomsLoading 
              ? <Skeleton height={20} width={200}/>
              : occupancy}
        </Grid>
        <Grid item xs={12} md={6} lg={5} xl={3}>
          {props.roomsLoading 
              ? <Skeleton height={20} width={350}/>
              : checkin}
        </Grid>
        <Grid item xs={12} md={6} lg={7} xl={9}>
          {props.roomsLoading 
              ? <Skeleton height={20} width={350}/>
              : checkout}
        </Grid>
        <Grid item xs={12}  md={3} lg={5} xl={9}>
        {props.roomsLoading 
              ? <Skeleton height={20} width={320}/>
              : extracharges}
        </Grid>  
      </Grid>
     </Paper>
  </Grid>;
}

export default Product;