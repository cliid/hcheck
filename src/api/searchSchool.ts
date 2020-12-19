import { AxiosResponse } from 'axios';
import { SchoolData, School, SearchSchoolResponse } from 'typings';
import { URLSearchParams } from 'url';

import constants from '../utils/constants';
import customAxios from '../utils/customAxios';

export default async (school: School): Promise<Array<SchoolData>> => {
  const regionCode = constants.regions[school.region];
  const schoolLevelCode = constants.schoolLevels[school.level];
  if (!regionCode)
    throw new Error(
      '올바르지 않은 지역 이름이 입력되었어요! 다시 확인해주세요!'
    );
  else if (!schoolLevelCode)
    throw new Error('올바르지 않은 학교급이 입력되었어요! 다시 확인해주세요!');

  const queryParams = new URLSearchParams();
  queryParams.set('lctnScCode', regionCode);
  queryParams.set('schulCrseScCode', schoolLevelCode.toString());
  queryParams.set('orgName', school.name);
  queryParams.set('loginType', 'school');
  queryParams.set('currentPageNo', '1');

  const result = await customAxios
    .get('/v2/searchSchool?' + queryParams.toString())
    .then((res: AxiosResponse<SearchSchoolResponse>) => {
      if (!Array.isArray(res.data.schulList) || res.data.schulList.length < 1)
        return [];
      else
        return res.data.schulList.map((item) => {
          return {
            name: item.kraOrgNm,
            code: item.orgCode,
            address: item.addres,
            requestUrl: item.atptOfcdcConctUrl,
          };
        });
    });

  return result;
};
