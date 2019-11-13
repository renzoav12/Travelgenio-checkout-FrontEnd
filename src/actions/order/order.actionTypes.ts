import { Action } from "redux";
import { RoomGuest } from "../../components/Checkout/Rooms/Room/Room";
import { Order } from "../../components/Checkout/Checkout";

export const ORDER_FETCH_START = 'ORDER_FETCH_START'
export const ORDER_FETCH_SUCCESS = 'ORDER_FETCH_SUCCESS'
export const ORDER_FETCH_FAILED = 'ORDER_FETCH_FAILED'
export const ORDER_UPDATE = 'ORDER_UPDATE'
export const ORDER_SEARCH = 'ORDER_SEARCH'

export interface OrderFetchStartAction extends Action<typeof ORDER_FETCH_START> {
}

export interface OrderFetchFailedAction extends Action<typeof ORDER_FETCH_SUCCESS> {
}

export interface OrderFetchSuccessAction extends Action<typeof ORDER_FETCH_FAILED> {
}

export interface OrderUpdateAction extends Action<typeof ORDER_UPDATE> {
    readonly order: Order;
}

export interface OrderSearchAction extends Action<typeof ORDER_SEARCH> {
    readonly id: string;
}

export type OrderActionTypes =
    | OrderFetchStartAction
    | OrderFetchFailedAction
    | OrderFetchSuccessAction
    | OrderUpdateAction
    | OrderSearchAction;