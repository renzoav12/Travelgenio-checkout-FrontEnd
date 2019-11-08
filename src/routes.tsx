import React from 'react'
import { Route } from 'react-router'

import {
  ROUTE_HOME,
  ROUTE_NOT_FOUND,
  ROUTE_CHECKOUT
} from './routes.constants'
import Checkout from './components/Checkout/Checkout'

const EmptyComponent = () => <div />

export const getRoutes = () => (
  <div>
    <Route component={Checkout} path={ROUTE_CHECKOUT} />
  </div>
)
