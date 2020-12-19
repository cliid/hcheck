import axios, { AxiosInstance } from 'axios';
import constants from './constants';

interface Custom {
  setToken?: (tk: string) => void;
  setRequestUrl?: (url: string) => void;
}
type CustomAxios = AxiosInstance & Custom;

const customAxios: CustomAxios = axios.create({
  baseURL: constants.baseUrl,
  headers: {
    Accept: constants.acceptConfig,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': constants.jsonContentType,
    'User-Agent': constants.fakeUserAgent,
  },
});

customAxios.setToken = (tk: string): void => {
  customAxios.defaults.headers.common['Authorization'] = tk;
};
customAxios.setRequestUrl = (url: string): void => {
  customAxios.defaults.baseURL = url;
};
export default customAxios;
