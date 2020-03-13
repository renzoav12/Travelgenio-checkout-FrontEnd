const dev = {
    PRODUCT_API: 'https://dev-hotels-shopping-product.travelagency.tech',
    CHECKOUT_API: 'https://dev-hotels-shopping-checkout.travelagency.tech/checkout/hotels/'
};

const prod = {
    PRODUCT_API: "https://" + window.location.hostname + "/hotels/api/",
    CHECKOUT_API: "https://" + window.location.hostname + "/checkout/hotels/"
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    ...config
};