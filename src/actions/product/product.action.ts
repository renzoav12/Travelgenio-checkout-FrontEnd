
import { 
    PRODUCT_FETCH_START,
    PRODUCT_FETCH_FAILED,
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_UPDATE, 
    ProductActionTypes,
    PRODUCT_SEARCH
} from './product.actionTypes';
import { RootState } from '../../store';
import { AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootAction } from '../action';
import product from '../../api/product/product';
import { ProductProps } from '../../components/Checkout/Product/Product';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;

export function productFetchStart() : ProductActionTypes {
    return {
        type: PRODUCT_FETCH_START
    }
};

export function productFetchSuccess() : ProductActionTypes {
    return {
        type: PRODUCT_FETCH_SUCCESS
    }
};

export function productFetchFailed() : ProductActionTypes {
    return {
        type: PRODUCT_FETCH_FAILED
    }
};

export function productUpdate(product: ProductProps) : ProductActionTypes {
    return {
        type: PRODUCT_UPDATE,
        product
    }
};

export function productSearch(id: string) : ProductActionTypes {
    return {
        type: PRODUCT_SEARCH,
        id
    }
};

export const productFetch = (action: (product: ProductProps) => void) => async (
    dispatch,
    getState: () => RootState
) => {
    dispatch(productFetchStart());
    try {
        const response: AxiosResponse<ProductProps> = await product.get(
            '/products/' + getState().checkout.productId,
            { 
                params: {
                    language: 'es-ES'
                }
            }
        );
        dispatch(action(response.data));
    } catch (e) {
        dispatch(productFetchFailed());
    }
    dispatch(productFetchSuccess());
};

export const thunkProductLoad = (id: string): ThunkResult<void> => async (
    dispatch,
    getState: () => RootState
) => {
    dispatch(productSearch(id));
    dispatch(productFetch(productUpdate));
};