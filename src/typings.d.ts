import constants from './utils/constants';

export interface SchoolData {
  name: string;
  code: string;
  address: string;
  requestUrl: string;
}

export interface School {
  region: keyof typeof constants.regions;
  level: keyof typeof constants.schoolLevels;
  name: string;
}

export interface SearchSchoolResponse {
  schulList: [
    {
      orgCode: string;
      kraOrgNm: string;
      engOrgNm: string;
      insttClsfCode: string;
      lctnScCode: string;
      lctnScNm: string;
      sigCode: string;
      juOrgCode: string;
      schulKndScCode: string;
      orgAbrvNm01: string;
      orgAbrvNm02: string;
      orgUon: string;
      updid: string;
      mdfcDtm: string;
      atptOfcdcConctUrl: string;
      addres: string;
    }
  ];
  sizeover: boolean;
}

export type Region =
  | '서울'
  | '부산'
  | '대구'
  | '인천'
  | '광주'
  | '대전'
  | '울산'
  | '세종'
  | '경기'
  | '강원'
  | '충북'
  | '충남'
  | '전북'
  | '전남'
  | '경북'
  | '경남'
  | '제주';

export type Level = '유치원' | '초등학교' | '중학교' | '고등학교' | '특수학교';
