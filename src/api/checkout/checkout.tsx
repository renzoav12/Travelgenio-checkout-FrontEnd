import axios from 'axios';
import config from '../../config';

export default axios.create({
    baseURL: config.CHECKOUT_API
});