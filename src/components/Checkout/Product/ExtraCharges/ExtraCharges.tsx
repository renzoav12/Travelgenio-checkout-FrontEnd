import React, { FunctionComponent } from 'react';
import { Box } from '@material-ui/core';

export interface ExtraChargesProps {
    total: Price;
    description: string;
    details: [Charge];
}

export interface Price {
    amount: string;
    currency: string;
}

export interface Charge {
    price: Price;
    description: string;
    type: string;
}


const ExtraCharges: FunctionComponent<ExtraChargesProps> = props => {
    if (props.total != null){
        return <Box >{props.description} </Box>
    }else{
        return null;
    }
}
  

export default ExtraCharges;