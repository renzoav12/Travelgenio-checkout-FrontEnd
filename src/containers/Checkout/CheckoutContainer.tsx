import React, { FunctionComponent, useEffect } from 'react';
import Checkout, { CheckoutProps } from '../../components/Checkout/Checkout';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { thunkGuestsSave } from '../../actions/guests/guests.action';
import { thunkProductLoad } from '../../actions/product/product.action';
import { Container } from "@material-ui/core";
import { loadI18n } from '../../actions/i18n/i18n.action';
import { initCobrand, isLocalHero } from "@hotels/header-footer";
import config from "../../config";

interface CheckoutContainerProps extends CheckoutProps {
  productId: string;
  loadI18n: () => void;
  initCobrand?: (url: string, emailSubscriptionUrl: string) => void;
}

const CheckoutContainer: FunctionComponent<CheckoutContainerProps> = props => {

  useEffect(() => {
    props.loadI18n();
    if(!isLocalHero()) {
      props.initCobrand && props.initCobrand(config.COBRAND, config.EMAIL_SUBSCRIPTION);
    }
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
      productId: ownProps.match.params.productId,
  };
};

export default connect(
  mapStateToProps,
  {
    onLoad: thunkProductLoad,
    onSubmit: thunkGuestsSave,
    loadI18n: loadI18n,
    initCobrand: initCobrand,
  }
)(CheckoutContainer);
