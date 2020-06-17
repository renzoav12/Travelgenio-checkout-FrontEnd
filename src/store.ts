import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';

import { connectRouter, routerMiddleware } from 'connected-react-router'
import { history } from './history';
import { RootAction } from './actions/action';
import { Checkout } from './model/Checkout';
import { checkoutReducer } from './reducers/checkoutReducer';
import { i18nState } from 'redux-i18n';
import { cobrandReducer } from '@hotels/header-footer';

export interface RootState {
    readonly router: any;
    readonly checkout: Checkout;
    readonly i18nState: any;
    readonly cobrand: any;
}

const rootReducer = combineReducers<RootState>({
    router: connectRouter(history),
    checkout: checkoutReducer,
    i18nState: i18nState,
    cobrand: cobrandReducer    
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
