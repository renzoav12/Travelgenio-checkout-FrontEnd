import React, { Component } from 'react';

import Checkout from '../../components/Checkout';
import { RoomGuest } from '../../components/Checkout/Guest/Guest';


interface CheckoutContainerProps {
}

class CheckoutContainer extends Component<CheckoutContainerProps> {

  componentDidMount() {
  }

  componentDidUpdate (prevProps) {
  }

  onSumbit = (guests: Array<RoomGuest>): void => {
    console.info(guests);
  }

  render() {
    const checkoutProps = {
      id: "1111",
      guests: [
        {
          name:"",
          lastName:"",
          email:"",
          phone: {
            countryCode:"",
            areaCode:"",
            number:"",
          }
        },
        {
          name:"",
          lastName:"",
          email:"",
          phone: {
            countryCode:"",
            areaCode:"",
            number:"",
          }
        },
        {
          name:"",
          lastName:"",
          email:"",
          phone: {
            countryCode:"",
            areaCode:"",
            number:"",
          }
        }
      ]
    };

    return <Checkout {...checkoutProps} onSubmit={this.onSumbit}/>;
  }
}


export default CheckoutContainer;
