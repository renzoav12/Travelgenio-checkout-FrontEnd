import React, { Component } from 'react';

import Checkout from '../../components/Checkout';
import { CheckoutProps } from '../../components/Checkout/Checkout';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { thunkGuestsSave } from '../../actions/guests/guests.action';
import { thunkProductLoad } from '../../actions/product/product.action';

interface CheckoutContainerProps extends CheckoutProps {
  productId: string;
}

class CheckoutContainer extends Component<CheckoutContainerProps> {

  componentDidMount() {
    this.props.onLoad(this.props.productId);
  }

  render() {
    return <Checkout {...this.props}/>;
  }
}

const mapStateToProps = (rootState: RootState, ownProps) => {
  return {
      product: rootState.checkout.product,
      productId: ownProps.match.params.productId
  };
};

export default connect(
  mapStateToProps,
  {
    onLoad: thunkProductLoad,
    onSubmit: thunkGuestsSave
  }
)(CheckoutContainer);
