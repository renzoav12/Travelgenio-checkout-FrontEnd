import React, { Component } from 'react';

import Checkout from '../../components/Checkout';
import { CheckoutProps } from '../../components/Checkout/Checkout';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { thunkGuestsSave } from '../../actions/checkout/checkout.action';
import { thunkOrderLoad } from '../../actions/order/order.action';


class CheckoutContainer extends Component<CheckoutProps> {

  componentDidMount() {
    this.props.onLoad(this.props.orderId);
  }

  render() {
    return <Checkout {...this.props}/>;
  }
}

const mapStateToProps = (rootState: RootState, ownProps) => {
  return {
      order: rootState.checkout.order,
      orderId: ownProps.match.params.orderId
  };
};

export default connect(
  mapStateToProps,
  {
    onLoad: thunkOrderLoad,
    onSubmit: thunkGuestsSave
  }
)(CheckoutContainer);
