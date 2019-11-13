
import { 
    ORDER_FETCH_START,
    ORDER_FETCH_FAILED,
    ORDER_FETCH_SUCCESS,
    ORDER_UPDATE, 
    OrderActionTypes,
    ORDER_SEARCH
} from './order.actionTypes';
import { RootState } from '../../store';
import { AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootAction } from '../action';
import { Order } from '../../components/Checkout/Checkout';
import checkout from '../../api/checkout/checkout';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;

export function orderFetchStart() : OrderActionTypes {
    return {
        type: ORDER_FETCH_START
    }
};

export function orderFetchSuccess() : OrderActionTypes {
    return {
        type: ORDER_FETCH_SUCCESS
    }
};

export function orderFetchFailed() : OrderActionTypes {
    return {
        type: ORDER_FETCH_FAILED
    }
};

export function orderUpdate(order: Order) : OrderActionTypes {
    return {
        type: ORDER_UPDATE,
        order
    }
};

export function orderSearch(id: string) : OrderActionTypes {
    return {
        type: ORDER_SEARCH,
        id
    }
};

export const orderFetch = (action: (order: Order) => void) => async (
    dispatch,
    getState: () => RootState
) => {
    dispatch(orderFetchStart());
    try {
        const response: AxiosResponse<Order> = await checkout.get(
            '/orders/' + 123,
            { 
                params: {
                    language: 'en'
                }
            }
        );
        dispatch(action(response.data));
    } catch (e) {
        dispatch(orderFetchFailed());
    }
    dispatch(orderFetchSuccess());
};

export const thunkOrderLoad = (id: string): ThunkResult<void> => async (
    dispatch,
    getState: () => RootState
) => {
    dispatch(orderSearch(id));
    dispatch(orderFetch(orderUpdate));
};