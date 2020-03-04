import React, { FunctionComponent, useEffect } from 'react';
import Checkout, { CheckoutProps } from '../../components/Checkout/Checkout';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { thunkGuestsSave } from '../../actions/guests/guests.action';
import { thunkProductLoad } from '../../actions/product/product.action';
import { Container } from "@material-ui/core";

interface CheckoutContainerProps extends CheckoutProps {
  productId: string;
}

const CheckoutContainer: FunctionComponent<CheckoutContainerProps> = props => {

  useEffect(() => {
    props.onLoad(props.productId);
  }, []);

  return <Container maxWidth="lg">
    <Checkout {...props}/>
  </Container>;
  
}

const mapStateToProps = (rootState: RootState, ownProps) => {
  return {
      product: rootState.checkout.product,
      loading: rootState.checkout.loading,
      roomsLoading: rootState.checkout.roomsLoading,
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
