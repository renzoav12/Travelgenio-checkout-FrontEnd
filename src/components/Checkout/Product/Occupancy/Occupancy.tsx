import React, { SFC } from 'react';
import { Typography } from '@material-ui/core';

export interface OccupancyProps {
  adults: number;
  children: number;
}

const Occupancy: SFC<OccupancyProps> = props => {
  const adultsText = props.adults + (props.adults == 1 ? " adulto" : " adultos");
  const childrenText = props.children > 0 ? ", " + props.children + (props.children == 1 ? " niño" : " nuños") : "";

  return <span>{adultsText}{childrenText}</span>;
}

export default Occupancy;