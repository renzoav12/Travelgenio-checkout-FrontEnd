import {
  GUESTS_SAVE_START,
  GUESTS_SAVE_FAILED,
  GUESTS_SAVE_SUCCESS,
  GUESTS_UPDATE,
  GuestsActionTypes,
} from "./guests.actionTypes";
import { RootState } from "../../store";
import { AxiosResponse } from "axios";
import { RoomGuest } from "../../components/Checkout/Rooms/Room/Room";
import checkout from "../../api/checkout/checkout";
import { ThunkAction } from "redux-thunk";
import { RootAction } from "../action";
import config from "../../config";

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;

export function guestsSaveStart(): GuestsActionTypes {
  return {
    type: GUESTS_SAVE_START,
  };
}

export function guestsSaveSuccess(): GuestsActionTypes {
  return {
    type: GUESTS_SAVE_SUCCESS,
  };
}

export function guestsSaveFailed(): GuestsActionTypes {
  return {
    type: GUESTS_SAVE_FAILED,
  };
}

export function guestsUpdate(guests: Array<RoomGuest>): GuestsActionTypes {
  return {
    type: GUESTS_UPDATE,
    guests: guests,
  };
}

export const thunkGuestsSave = (
  guests: Array<RoomGuest>
): ThunkResult<void> => async (dispatch) => {
  dispatch(guestsUpdate(guests));
  dispatch(guestsSave());
};

export const guestsSave = () => async (dispatch, getState: () => RootState) => {
  dispatch(guestsSaveStart());

  try {
    await checkout.post(
      "/products/" + getState().checkout.product.id + "/guests",
      getState().checkout.guests
    );

    const locale = getState().i18nState.lang;
    const cobrandedCode = getState().checkout.product.seller.cobrandedCode;
    const productId = getState().checkout.productId;

    window.location.replace(
      `${config.CHECKOUT_TRAVELGENIO_PAGE}${locale}/${cobrandedCode}/${productId}`
    );
  } catch (e) {
    dispatch(guestsSaveFailed());
  }
};
