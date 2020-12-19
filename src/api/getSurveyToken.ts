import { AxiosResponse } from 'axios';

import customAxios from '../utils/customAxios';

interface User {
  token: string;
  userNo: string;
}
export default async (schoolCode: string, user: User): Promise<string> => {
  if (customAxios.setToken !== undefined) customAxios.setToken(user.token);
  const requestJson = {
    orgCode: schoolCode,
    userPNo: user.userNo,
  };
  const surveyToken = await customAxios
    .post('/v2/getUserInfo', requestJson)
    .then((json: AxiosResponse<Record<string, string>>) => json.data.token);

  return surveyToken;
};
