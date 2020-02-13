import React, { SFC } from 'react';

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


const ExtraCharges: SFC<ExtraChargesProps> = props => {
    console.log(props.total);
    if (props.total != null){
        return (<span> {props.description} : {props.total.amount} {props.total.currency}</span> )
    }else{
        return null;
    }
}
  

export default ExtraCharges;