import { AxiosResponse } from 'axios';
import encrypt from '../utils/encrypt';
import customAxios from '../utils/customAxios';

interface FindUserResponse {
  orgName: string;
  admnYn: string;
  atptOfcdcConctUrl: string;
  mngrClassYn: string;
  pInfAgrmYn: string;
  userName: string;
  stdntYn: string;
  token: string;
  mngrDeptYn: string;
  isError: boolean;
}

interface RequestJsonFormat {
  birthday: string;
  loginType: string;
  name: string;
  orgCode: string;
  stdntPNo: null | unknown;
}

export default async function findUser(
  schoolCode: string,
  name: string,
  birthday: string
): Promise<string> {
  const requestJson: RequestJsonFormat = {
    birthday: encrypt(birthday),
    loginType: 'school',
    name: encrypt(name),
    orgCode: schoolCode,
    stdntPNo: null,
  };

  // Need Custom Type System !!!
  try {
    return customAxios
      .post('/v2/findUser', requestJson)
      .then((json: AxiosResponse<FindUserResponse>) => {
        if (json.data.isError)
          throw new Error(
            '입력하신 학생정보가 올바르지 않아요! 학교 정보, 학생 이름, 생년월일을 확인해주세요!'
          );
        else if (json.data.token) return json.data.token;
        else
          throw new Error(
            '인증 토큰 조회에 실패했습니다. 구조가 변경되었을 가능성이 있으니 개발자에게 알려주세요.'
          );
      });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
