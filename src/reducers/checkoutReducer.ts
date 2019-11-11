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
        }
      ]
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