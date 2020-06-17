import React, { FunctionComponent } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Category from '@hotels/category';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import KingBedIcon from '@material-ui/icons/KingBed';
import TodayIcon from '@material-ui/icons/Today';
import Occupancy from '@hotels/occupancy';
import MealPlan, { MealPlanProps } from '@hotels/mealplan';
import Description from "./Description/Description";
import ExtraCharges from './ExtraCharges/ExtraCharges';
import Skeleton from 'react-loading-skeleton';
import Keys from "@hotels/translation-keys";
import Translation from "@hotels/translation";
import PropTypes from "prop-types";

export interface ProductProps {
  id: string;
  accommodation: Accommodation;
  pay: PayProps;
  breakdown: Breakdown;
  stay: Stay;
  mealPlan?: MealPlanProps | undefined;
  cancelPolicy: string;
  room: Room;
  rooms: Array<RoomOccupancies>;
  quantity: number;
  occupancy: Occupancy;
  roomsLoading: boolean;
  extraCharges: ExtraCharges;
  seller: Seller;
  search: ProductSearch;
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
  instructions: string;
}

export interface CheckOut {
  date: string;
  time: string;
}

export interface BedGroup {
  description: string;
}

export interface Occupancies {
  description: string;
  children: Ages;
}

export interface Ages {
   totals: number;
   description: string;
   ages: AgesExport;
}

export interface AgesExport {
  description: string;
}

export interface RoomOccupancies {
  name: string;
  description: string;
  quantity: number;
  bedGroup: BedGroup;
  occupancy: Occupancies;
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

export interface Breakdown {
  tax: Price;
  payWithoutTax: Price;
  charges: [BreakdownCharge];
}

export interface Price {
  currency: string;
  amount: string;
  amountText: string;
}

export interface Charge {
  price: Price;
  description: string;
  type: string;
}

export interface BreakdownCharge {
  price: Price;
  type: ChargeType;
  description: string;
}

export interface ChargeType {
  code: string;
  description: string;
}

export interface PayProps {
  price: Price;
}

export interface Seller {
  brandId: string;
  pointOfSaleId: string;
  cobrandedCode: string;
}

export interface ProductSearch {
  country: string;
  language: string;
  occupancy: string;
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
    },
    instructions: {
      marginRight: 5
    },
    iconRoom: {
      paddingLeft: 9,
      paddingTop: 11
    }
  }),
);

const Product: FunctionComponent<ProductProps> = (props, context) => {
  const begin24Hours = "00:00";
  const end24Hours = "23:59";
  const noneCheckinHour = <Translation tkey={Keys.common.accommodation_not_check_in}/>;
  const noneCheckoutHour = <Translation tkey={Keys.common.accommodation_not_check_out}/>;

  const classes = useStyles();

  const checkInHour = () => {
    if(props.stay.checkIn.beginTime === begin24Hours && props.stay.checkIn.endTime === end24Hours) {
      return <Box> <Translation tkey={Keys.common.accommodation_check_in_24hs}/></Box>;  
    } else if(props.stay.checkIn.beginTime && props.stay.checkIn.endTime && props.stay.checkIn.beginTime !== props.stay.checkIn.endTime) {
      return <Box><Translation tkey={Keys.common.accommodation_check_in_from_to} values={{n:props.stay.checkIn.beginTime ,m:props.stay.checkIn.endTime}}/></Box>;
    } else if(props.stay.checkIn.beginTime) {
      return <Box><Translation tkey={Keys.common.accommodation_check_in_from} values={{n:props.stay.checkIn.beginTime}}/></Box>
    } else if(props.stay.checkIn.endTime) {
      return <Box><Translation tkey={Keys.common.accommodation_check_in_until} values={{n:props.stay.checkIn.endTime}}/></Box>
    } else {
      return <Box>{noneCheckinHour}</Box>;
    }
  }
  
  const checkOutHour = () => {
    let checkoutTime = props.stay.checkOut && props.stay.checkOut.time ? <Translation tkey={Keys.common.accommodation_check_in_until} values={{n:props.stay.checkOut.time}}/>
    : noneCheckoutHour;
    return <Box>{checkoutTime}</Box>;
  }

  const getDescription = (room: RoomOccupancies) =>{
    let addAges = room.occupancy.children.totals > 0 ? "*" + room.occupancy.children.ages.description : "*0";
    let occupancyDesc= room.occupancy.description + addAges;
    return occupancyDesc + " + " + room.bedGroup.description;
  }

  const location = <Box><LocationOnIcon fontSize="small"/> {props.accommodation.location.address}</Box>;

  const room = <Box><KingBedIcon fontSize="small"/></Box>; 

  const checkin = <Box className={classes.checkInOut}>
                    <Box className={classes.checkInOutIconPadding}><TodayIcon fontSize="small"/></Box>
                    <Typography variant="h2" className={classes.checkInOutTextPadding}>
                      <Translation tkey={Keys.common.accommodation_check_in}/>: {props.stay.checkIn.date}</Typography> 
                    <Box className={classes.checkInOutTextPadding}>{checkInHour}</Box>
                  </Box>;

  const checkout = <Box className={classes.checkInOut}>
                    <Box className={classes.checkInOutIconPadding}><TodayIcon fontSize="small"/></Box>
                    <Typography variant="h2" className={classes.checkInOutTextPadding}>
                      <Translation tkey={Keys.common.accommodation_check_out}/>: {props.stay.checkOut.date}</Typography> 
                    <Box className={classes.checkInOutTextPadding}>{checkOutHour}</Box>
                  </Box>;

  const extracharges = <Box className={classes.extraCharge}> 
                          <ExtraCharges {...props.extraCharges} />
                      </Box>;

  const instructions = (
    <Box className={classes.instructions}>
      <Description text={props.stay.checkIn.instructions} />
    </Box>
  );
  
  return <Grid container>
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1"><Translation tkey={Keys.checkout.your_selection}/></Typography>
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
        <Grid className={classes.iconRoom}>
        {props.roomsLoading 
              ? <Skeleton height={20} width={150}/>
              : room}
        </Grid>      
        <Grid item xs={12}  sm={8} md={9} lg={10} xl={11}>
          {props.roomsLoading 
              ? <Skeleton height={20} width={200}/>
          : <Grid><Box><Translation tkey={Keys.checkout.stay_of_x_day} quantity={props.stay.nights} values={{x:props.stay.nights}}/>
          </Box>  {props.rooms?.map((room,index) => <Grid item xs={12} key={index}>
                  <Occupancy adults= {0} childrenAges={[]} description={getDescription(room)} showText={true}></Occupancy>
          </Grid>)}</Grid>}
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
        <Grid item xs={12}>
            {props.roomsLoading ? (
              <Skeleton height={20} width={350} />
            ) : (
              instructions
            )}
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
Product.contextTypes = { t: PropTypes.func };

export default Product;