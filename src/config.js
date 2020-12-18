const dev = {
    PRODUCT_API: "https://" + window.location.hostname + "/hotels/api/",
    CHECKOUT_API: "https://" + window.location.hostname + "/hotels/api/",
    CHECKOUT_TRAVELGENIO_PAGE: "http://develop-hotelssite.int.travelgenio.tech/checkout/hotels/payment/",
    TRANSLATION_API: "https://" + window.location.hostname + "/hotels/api/",
    COBRAND: "https://" + window.location.hostname + "/hotels/api/translations/config",
    EMAIL_SUBSCRIPTION: "http://v24-hermes.int.travelgenio.tech"
};

const prod = {
    PRODUCT_API: "https://" + window.location.hostname + "/hotels/api/",
    CHECKOUT_API: "https://" + window.location.hostname + "/hotels/api/",
    CHECKOUT_TRAVELGENIO_PAGE: "https://" + window.location.hostname + "/checkout/hotels/payment/",
    TRANSLATION_API: "https://" + window.location.hostname + "/hotels/api/",
    COBRAND: "https://" + window.location.hostname + "/hotels/api/translations/config",
    EMAIL_SUBSCRIPTION: "http://v24-hermes.int.travelgenio.tech"
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    ...config
};