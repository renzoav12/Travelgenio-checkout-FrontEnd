import { setTranslations, IreduxI18nState } from 'redux-i18n';
import axios, { AxiosResponse } from 'axios';
import config from './../../config';
import { ThunkAction } from 'redux-thunk';

export const loadI18n = () : ThunkAction<any, IreduxI18nState, any, any> => async (dispatch) => {
  const axiosInstance = axios.create({
    baseURL: config.I18N_API
  });
  
  const response: AxiosResponse<any> = await axiosInstance.get('/5ea9d1472d00005100268373');
  dispatch(setTranslations(response.data.translations));
};
