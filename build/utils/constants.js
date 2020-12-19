"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var regions = {
    서울: '01',
    부산: '02',
    대구: '03',
    인천: '04',
    광주: '05',
    대전: '06',
    울산: '07',
    세종: '08',
    경기: '10',
    강원: '11',
    충북: '12',
    충남: '13',
    전북: '14',
    전남: '15',
    경북: '16',
    경남: '17',
    제주: '18',
};
var schoolLevels = {
    유치원: 1,
    초등학교: 2,
    중학교: 3,
    고등학교: 4,
    특수학교: 5,
};
exports.default = {
    baseUrl: 'https://senhcs.eduro.go.kr',
    publicKey: "-----BEGIN PUBLIC KEY-----\n  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA81dCnCKt0NVH7j5Oh2+S\n  GgEU0aqi5u6sYXemouJWXOlZO3jqDsHYM1qfEjVvCOmeoMNFXYSXdNhflU7mjWP8\n  jWUmkYIQ8o3FGqMzsMTNxr+bAp0cULWu9eYmycjJwWIxxB7vUwvpEUNicgW7v5nC\n  wmF5HS33Hmn7yDzcfjfBs99K5xJEppHG0qc+q3YXxxPpwZNIRFn0Wtxt0Muh1U8a\n  vvWyw03uQ/wMBnzhwUC8T4G5NclLEWzOQExbQ4oDlZBv8BM/WxxuOyu0I8bDUDdu\n  tJOfREYRZBlazFHvRKNNQQD2qDfjRz484uFs7b5nykjaMB9k/EJAuHjJzGs9MMMW\n  tQIDAQAB\n  -----END PUBLIC KEY-----\n  ",
    jsonContentType: 'application/json;charset=utf-8',
    fakeUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
    acceptConfig: 'application/json, text/plain, */*',
    regions: regions,
    schoolLevels: schoolLevels,
};
//# sourceMappingURL=constants.js.map