const dev = {
    PRODUCT_API: 'https://dev-hotels-autocomplete-product.travelagency.tech',
    CHECKOUT_API: 'https://dev-hotels-shopping-checkout.travelagency.tech'
};

const prod = {
    PRODUCT_API: 'https://hotels-autocomplete-product.travelagency.tech',
    CHECKOUT_API: 'https://dev-hotels-shopping-checkout.travelagency.tech'
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    ...config
};