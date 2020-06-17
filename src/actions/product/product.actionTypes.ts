import { Action } from "redux";
import { ProductProps } from "../../components/Checkout/Product/Product";

export interface Search {
  country: string,
  language: string,
  occupancy: string,
}

export const PRODUCT_FETCH_START = 'PRODUCT_FETCH_START'
export const PRODUCT_FETCH_SUCCESS = 'PRODUCT_FETCH_SUCCESS'
export const PRODUCT_FETCH_FAILED = 'PRODUCT_FETCH_FAILED'
export const PRODUCT_UPDATE = 'PRODUCT_UPDATE'
export const PRODUCT_SEARCH = 'PRODUCT_SEARCH'

export interface ProductFetchStartAction extends Action<typeof PRODUCT_FETCH_START> {
}

export interface ProductFetchFailedAction extends Action<typeof PRODUCT_FETCH_SUCCESS> {
}

export interface ProductFetchSuccessAction extends Action<typeof PRODUCT_FETCH_FAILED> {
}

export interface ProductUpdateAction extends Action<typeof PRODUCT_UPDATE> {
    readonly product: ProductProps;
}

export interface ProductSearchAction extends Action<typeof PRODUCT_SEARCH> {
    readonly id: string;
}

export type ProductActionTypes =
    | ProductFetchStartAction
    | ProductFetchFailedAction
    | ProductFetchSuccessAction
    | ProductUpdateAction
    | ProductSearchAction;