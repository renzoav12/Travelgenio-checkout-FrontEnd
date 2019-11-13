import _ from 'lodash';
import { Reducer } from 'redux';
import { RootAction } from '../actions/action';
import { Checkout } from '../model/Checkout';
import { GUESTS_SAVE_START, GUESTS_SAVE_FAILED, GUESTS_SAVE_SUCCESS, GUESTS_UPDATE } from '../actions/checkout/checkout.actionTypes';

const initialState: Checkout = {
    loading: false,
    error: {
        exists: false,
    },
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
      }
    ],
    order: {
      id: "1111",
      pay: {
        price: {
          amount: "2456.54",
          currency: "EUR"
        }
      },
      product: {
        id: "111122",
        name: "Hotel Faena",
        description: "description",
        image: {
          url: ""
        },
        category: {
          code: "4",
          name: "5 estrellas"
        },
        location: {
          address: "Av. del Liberador 1200",
          geoPosition: {
            latitude: 12.2356,
            longitude: 15.9877
          }
        },
        stay: {
          checkIn: {
            date: "2012-11-11",
            beginTime: "14:00",
            endTime: "15:00"
          },
          checkOut: {
            date: "2012-15-11",
            time: "10:00"
          },
          nights: 5
        },
        mealPlan: {
          code: "1",
          name: "Desayuno"
        },
        rooms: {
          quantity: 2,
          description: "Habitación con Vista al Mar."
        },
        cancelPolicy: "Cancela gratis hasta el 2019-11-20"
      }
    }
};

export const checkoutReducer: Reducer<Checkout, RootAction> = (
    state = initialState, 
    action
) => {
    switch (action.type) {
      case GUESTS_SAVE_START:
        return { ...state, loading: true };
      case GUESTS_SAVE_FAILED:
        return { ...state, loading: false };
      case GUESTS_SAVE_SUCCESS:
        return { ...state, loading: false };
      case GUESTS_UPDATE:
        return { 
            ...state,
            guests: action.guests
          }
      default:
        return state;
    }
}