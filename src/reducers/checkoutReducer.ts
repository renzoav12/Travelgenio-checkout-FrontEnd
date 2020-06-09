
import { Reducer } from 'redux';
import { RootAction } from '../actions/action';
import { Checkout } from '../model/Checkout';
import {
  GUESTS_SAVE_START,
  GUESTS_SAVE_FAILED,
  GUESTS_SAVE_SUCCESS,
  GUESTS_UPDATE
} from '../actions/guests/guests.actionTypes';
import {
  PRODUCT_FETCH_START,
  PRODUCT_FETCH_FAILED,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_UPDATE,
  PRODUCT_SEARCH
} from '../actions/product/product.actionTypes';
import { ProductProps } from '../components/Checkout/Product/Product';

const initialState: Checkout = {
  loading: false,
  roomsLoading: false,
  productId: "",
  error: {
    exists: false,
  },
  guests: [
    {
      name: "",
      lastName: "",
      email: "",
      phone: {
        countryCode: "",
        areaCode: "",
        number: "",
      }
    },
    {
      name: "",
      lastName: "",
      email: "",
      phone: {
        countryCode: "",
        areaCode: "",
        number: "",
      }
    }
  ],
  product: {
    id: "",
    pay: {
      price: {
        amount: "",
        currency: "",
        amountText: ""
      }
    },
    accommodation: {
      id: "",
      name: "",
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
    },
    stay: {
      checkIn: {
        date: "",
        beginTime: "",
        endTime: "",
        instructions: ""
      },
      checkOut: {
        date: "",
        time: ""
      },
      nights: 0
    },
    mealPlan: {
      code: "",
      name: "",
      type: ""
    },
    room: {
      name: "",
      description: ""
    },
    rooms: [],
    cancelPolicy: "",
    quantity: 0,
    occupancy: {
      adults: 0,
      children: 0
    },
    breakdown:{
      tax:{
        currency: "",
        amount: "",
        amountText: ""
      },
      payWithoutTax:{
        currency: "",
        amount: "",
        amountText: ""
      },
      charges: [{
        price: {
          amount: "",
          currency:"",
          amountText: ""
        },
        type: {
          code:"",
          description:"",
        },
        description: ""
      }]
    },

    extraCharges:{
      total: {
          currency: "",
          amount: "",
          amountText: ""
          
        },
      description: "",
      details: [{ 
            price: {
                  amount: "",
                  currency:"",
                  amountText: ""
            },
          type: "",
          description: ""
        }
      ]
    },
    roomsLoading: false,
    seller: {
      brandId: "",
      pointOfSaleId: "",
      cobrandedCode: ""
    },
    search: {
      country: "",
      language: "",
      occupancy: ""
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
    case PRODUCT_SEARCH:
      return { ...state, productId: action.id };
    case PRODUCT_FETCH_START:
      return { ...state, roomsLoading: true };
    case PRODUCT_FETCH_FAILED:
      return { ...state, roomsLoading: false };
    case PRODUCT_FETCH_SUCCESS:
      return { ...state, roomsLoading: false };
    case PRODUCT_UPDATE:

      let product: ProductProps;

      if(!action.product.seller || !action.product.seller.cobrandedCode) {
         product = {
          ...action.product,
          seller: {
            brandId: "",
            pointOfSaleId: "",
            cobrandedCode: "201",
          }
        };
      } else {
        product = action.product;
      }
    
      return {
        ...state,
        product
      };
      
    default:
      return state;
  }
}