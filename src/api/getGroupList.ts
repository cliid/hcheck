import { AxiosResponse } from 'axios';
import customAxios from '../utils/customAxios';

interface UserGroupResponse {
  orgCode: string;
  orgName: string;
  userPNo: string;
  userNameEncpt: string;
  stdntYn: string;
  mngrYn: string;
  schulCrseScCode: string;
  lctnScCode: string;
  token: string;
  atptOfcdcConctUrl: string;
  wrongPassCnt: number;
  otherYn: string;
}

interface GetGroupListResponse {
  name: string;
  userNo: string;
  token: string;
}

export default async function getGroupList(): Promise<
  Array<GetGroupListResponse>
> {
  const requestJson = {};
  const result = customAxios
    .post('/v2/selectUserGroup', requestJson)
    .then(
      (
        res: AxiosResponse<Array<UserGroupResponse>>
      ): Array<GetGroupListResponse> => {
        const data = res.data;
        return data.map(
          (item: UserGroupResponse): GetGroupListResponse => {
            return {
              name: item.userNameEncpt,
              userNo: item.userPNo,
              token: item.token,
            };
          }
        );
      }
    )
    .catch((err: Error) => {
      console.error(err);
      process.exit(1);
    });
  return result;
}
