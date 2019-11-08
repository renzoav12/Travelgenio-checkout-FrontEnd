import React from 'react'
import { Route, Switch } from 'react-router'

import {
  ROUTE_CHECKOUT
} from './root.routes.constants'
import CheckoutContainer from '../../containers/Checkout'

export const getRoutes = () => (
  <div>
    <Switch>
      <Route path={ROUTE_CHECKOUT} component={CheckoutContainer} />
    </Switch>
  </div>
)
