import _ from 'lodash';
import { Reducer } from 'redux';
import { RootAction } from '../actions/action';
import { Checkout } from '../model/Checkout';
import { 
  GUESTS_SAVE_START,
  GUESTS_SAVE_FAILED,
  GUESTS_SAVE_SUCCESS,
  GUESTS_UPDATE
} from '../actions/checkout/checkout.actionTypes';
import {
  ORDER_FETCH_START,
  ORDER_FETCH_FAILED, 
  ORDER_FETCH_SUCCESS, 
  ORDER_UPDATE,
  ORDER_SEARCH
} from '../actions/order/order.actionTypes';

const initialState: Checkout = {
    loading: false,
    orderId: "",
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
      id: "",
      pay: {
        price: {
          amount: "",
          currency: ""
        }
      },
      product: {
        id: "",
        name: "",
        description: "",
        image: {
          url: ""
        },
        category: {
          code: "",
          name: ""
        },
        location: {
          address: "",
          geoPosition: {
            latitude: 0,
            longitude: 0
          }
        },
        stay: {
          checkIn: {
            date: "",
            beginTime: "",
            endTime: ""
          },
          checkOut: {
            date: "",
            time: ""
          },
          nights: 0
        },
        mealPlan: {
          code: "",
          name: ""
        },
        rooms: {
          quantity: 0,
          description: ""
        },
        cancelPolicy: ""
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
      case ORDER_SEARCH:
        return { ...state, orderId: action.id };
      case ORDER_FETCH_START:
        return { ...state, roomsLoading: true };
      case ORDER_FETCH_FAILED:
        return { ...state, roomsLoading: false };
      case ORDER_FETCH_SUCCESS:
        return {...state, roomsLoading: false };
      case ORDER_UPDATE:
        return {
          ...state,
          order: action.order
        };
      default:
        return state;
    }
}