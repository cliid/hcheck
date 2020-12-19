import { AxiosResponse } from 'axios';
import encrypt from '../utils/encrypt';
import logger from '../utils/logger';
import customAxios from '../utils/customAxios';

// returns AxiosResponse<string>
export default async function checkPassword(
  bearerToken: string,
  password: string
): Promise<string> {
  const requestJson = {
    password: encrypt(password),
    deviceUuid: '',
  };

  try {
    return customAxios
      .post('/v2/validatePassword', requestJson, {
        headers: { Authorization: bearerToken },
      })
      .then((res: AxiosResponse<string>): string => {
        if (!res.data.startsWith('Bearer'))
          throw new Error('비밀번호가 올바르지 않아요!');
        else return res.data;
      });
  } catch (err) {
    logger.logError(err);
    process.exit(1);
  }
}
