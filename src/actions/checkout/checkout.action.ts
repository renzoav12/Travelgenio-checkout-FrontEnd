
import { 
    GUESTS_SAVE_START,
    GUESTS_SAVE_FAILED,
    GUESTS_SAVE_SUCCESS,
    GUESTS_UPDATE, 
    CheckoutActionTypes
} from './checkout.actionTypes';
import { RootState } from '../../store';
import { AxiosResponse } from 'axios';
import { RoomGuest } from '../../components/Checkout/Rooms/Room/Room';
import checkout from '../../api/checkout/checkout';
import { ThunkAction } from 'redux-thunk';
import { RootAction } from '../action';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;

export function guestsSaveStart() : CheckoutActionTypes {
    return {
        type: GUESTS_SAVE_START
    }
};

export function guestsSaveSuccess() : CheckoutActionTypes {
    return {
        type: GUESTS_SAVE_SUCCESS
    }
};

export function guestsSaveFailed() : CheckoutActionTypes {
    return {
        type: GUESTS_SAVE_FAILED
    }
};

export function guestsUpdate(guests: Array<RoomGuest>) : CheckoutActionTypes {
    return {
        type: GUESTS_UPDATE,
        guests: guests
    }
};

export const thunkGuestsSave = (): ThunkResult<void> => async (
    dispatch
  ) => {
    dispatch(guestsSave());
};

export const guestsSave = () => async (
    dispatch,
    getState: () => RootState
) => {
    dispatch(guestsSaveStart());
    
    try {
        const response: AxiosResponse = await checkout.post(
            '/guests',
            getState().checkout.guests
        );
    } catch (e) {
        dispatch(guestsSaveFailed());
    }
    dispatch(guestsSaveSuccess());
};
