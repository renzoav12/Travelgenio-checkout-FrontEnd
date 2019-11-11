import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';

import { connectRouter, routerMiddleware } from 'connected-react-router'
import { history } from './history';
import { RootAction } from './actions/action';
import { Checkout } from './model/Checkout';
import { checkoutReducer } from './reducers/checkoutReducer';

export interface RootState {
    readonly router: any;
    readonly checkout: Checkout;
}

const rootReducer = combineReducers<RootState>({
    router: connectRouter(history),
    checkout: checkoutReducer
});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            routerMiddleware(history),
            reduxThunk as ThunkMiddleware<RootState, RootAction>
        )
    )
);
