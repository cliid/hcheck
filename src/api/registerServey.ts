import { AxiosResponse } from 'axios';
import logger from '../utils/logger';
import customAxios from '../utils/customAxios';

export default function registerServey(token: string, username: string): void {
  const requestJson = {
    deviceUuid: '',
    rspns00: 'Y',
    rspns01: '1',
    rspns02: '1',
    rspns03: null,
    rspns04: null,
    rspns05: null,
    rspns06: null,
    rspns07: null,
    rspns08: null,
    rspns09: '0',
    rspns10: null,
    rspns11: null,
    rspns12: null,
    rspns13: null,
    rspns14: null,
    rspns15: null,
  };

  try {
    customAxios.post('/registerServey', {
      ...requestJson,
      upperToken: token,
      upperUserNameEncpt: username,
    });
  } catch (err) {
    logger.logError(err);
    process.exit(1);
  }
}
