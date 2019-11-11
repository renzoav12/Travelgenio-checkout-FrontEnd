import { Action } from "redux";
import { RoomGuest } from "../../components/Checkout/Guest/Guest";

export const GUESTS_SAVE_START = 'GUESTS_SAVE_START'
export const GUESTS_SAVE_SUCCESS = 'GUESTS_SAVE_SUCCESS'
export const GUESTS_SAVE_FAILED = 'GUESTS_SAVE_FAILED'
export const GUESTS_UPDATE = 'GUESTS_UPDATE'

export interface GuestsPersistStartAction extends Action<typeof GUESTS_SAVE_START> {
}

export interface GuestsFetchFailedAction extends Action<typeof GUESTS_SAVE_SUCCESS> {
}

export interface GuestsPersistSuccessAction extends Action<typeof GUESTS_SAVE_FAILED> {
}

export interface GuestsUpdateAction extends Action<typeof GUESTS_UPDATE> {
    readonly guests: Array<RoomGuest>;
}

export type CheckoutActionTypes =
    | GuestsPersistStartAction
    | GuestsFetchFailedAction
    | GuestsPersistSuccessAction
    | GuestsUpdateAction;