import axios from "axios";
import config from "../../config";
import { OriginHostHeader } from "../headers";

export default axios.create({
  baseURL: config.CHECKOUT_API,
  headers: {
    ...OriginHostHeader,
  },
});
