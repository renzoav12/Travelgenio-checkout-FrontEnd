const dev = {
    PRODUCT_API: 'https://dev-hotels-shopping-product.travelagency.tech',
    CHECKOUT_API: 'https://dev-hotels-shopping-checkout.travelagency.tech',
    POST_CHECKOUT: 'http://localhost:49506/checkout/hotels/payment/es-ES/201/'
};

const prod = {
    PRODUCT_API: "https://" + window.location.hostname + "/hotels/api/",
    CHECKOUT_API: "https://" + window.location.hostname + "/hotels/api/",
    POST_CHECKOUT: 'http://es.travelgenio.com/hotels/payment/es-ES/201/'
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    ...config
};