import React, { Component } from 'react';

import Checkout from '../../components/Checkout';
import { CheckoutProps } from '../../components/Checkout/Checkout';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { thunkGuestsSave } from '../../actions/checkout/checkout.action';


class CheckoutContainer extends Component<CheckoutProps> {

  render() {
    return <Checkout {...this.props}/>;
  }
}

const mapStateToProps = (rootState: RootState, ownProps) => {
  return {
      guests: rootState.checkout.guests
  };
};

export default connect(
  mapStateToProps,
  {
    onSubmit: thunkGuestsSave
  }
)(CheckoutContainer);
