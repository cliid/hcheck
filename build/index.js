"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./utils/logger"));
var credentials_json_1 = __importDefault(require("./credentials.json"));
var api_1 = __importDefault(require("./api"));
var customAxios_1 = __importDefault(require("./utils/customAxios"));
var generateSchoolListTable_1 = __importDefault(require("./utils/generateSchoolListTable"));
(function run() {
    return __awaiter(this, void 0, void 0, function () {
        var schoolData, schoolCode, preEnteredCode, schoolInfo, schoolList, schoolTmpData, e_1, userToken, e_2, e_3, usersInAccount, user, surveyToken;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger_1.default.logDisclaimer();
                    logger_1.default.logNormal('\n');
                    logger_1.default.logNormal("*** \uC774 \uC2A4\uD06C\uB9BD\uD2B8\uB294 \uC2E4\uD589 \uD6C4 \uB0B4\uC77C " + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toLocaleTimeString() + "\uC5D0 \uB2E4\uC2DC \uC2E4\uD589\uB429\uB2C8\uB2E4! ***");
                    schoolCode = '';
                    preEnteredCode = credentials_json_1.default.school.code;
                    schoolInfo = {
                        region: credentials_json_1.default.school.region,
                        level: credentials_json_1.default.school.level,
                        name: credentials_json_1.default.school.name,
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api_1.default.searchSchool(schoolInfo)];
                case 2:
                    schoolList = _a.sent();
                    if (schoolList.length < 1)
                        return [2 /*return*/, logger_1.default.logError('검색된 학교가 하나도 없어요! 학교 이름을 정확하게 입력해주세요!')];
                    else if (preEnteredCode) {
                        schoolTmpData = schoolList.find(function (sch) { return preEnteredCode === sch.code; });
                        if (schoolTmpData !== undefined) {
                            schoolData = schoolTmpData;
                            logger_1.default.logStep('학교 데이터 가져오기 완료');
                            if (customAxios_1.default.setRequestUrl !== undefined)
                                customAxios_1.default.setRequestUrl('https://' + schoolData.requestUrl);
                            schoolCode = schoolData.code;
                        }
                        if (schoolTmpData === undefined || null) {
                            logger_1.default.logError('올바르지 않은 학교 코드에요! 아래 표를 확인하여 올바른 학교 코드를 등록해 주세요!');
                            return [2 /*return*/, console.log(generateSchoolListTable_1.default(schoolList))];
                        }
                    }
                    else if (schoolList.length > 1) {
                        logger_1.default.logError('너무 많은 학교가 검색되었어요! 아래 표를 확인하여 자신이 다니는 학교를 확인 후 직접 학교 코드를 등록해 주세요!');
                        return [2 /*return*/, console.log(generateSchoolListTable_1.default(schoolList))];
                    }
                    else
                        schoolData = schoolList[0];
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, logger_1.default.logError(e_1)];
                case 4:
                    userToken = '';
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, api_1.default.findUser(schoolCode, credentials_json_1.default.studentName, credentials_json_1.default.birthday)];
                case 6:
                    userToken = _a.sent();
                    logger_1.default.logStep('학생 인증 완료');
                    return [3 /*break*/, 8];
                case 7:
                    e_2 = _a.sent();
                    return [2 /*return*/, logger_1.default.logError(e_2)];
                case 8:
                    if (customAxios_1.default.setToken !== undefined)
                        customAxios_1.default.setToken(userToken);
                    _a.label = 9;
                case 9:
                    _a.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, api_1.default.checkPassword(userToken, credentials_json_1.default.password)];
                case 10:
                    userToken = _a.sent();
                    logger_1.default.logStep('비밀번호 확인 완료');
                    return [3 /*break*/, 12];
                case 11:
                    e_3 = _a.sent();
                    return [2 /*return*/, logger_1.default.logError(e_3)];
                case 12:
                    if (customAxios_1.default.setToken !== undefined)
                        customAxios_1.default.setToken(userToken);
                    return [4 /*yield*/, api_1.default.getGroupList()];
                case 13:
                    usersInAccount = _a.sent();
                    logger_1.default.logStep('참여자 목록 조회 완료');
                    user = usersInAccount.find(function (item) { return item.name === credentials_json_1.default.studentName; });
                    if (!user)
                        return [2 /*return*/, logger_1.default.logError('알 수 없는 이유로 참여자 목록에서 학생정보를 불러오지 못했어요.')];
                    else
                        logger_1.default.logStep('참여자 목록에서 학생정보 가져오기 완료');
                    return [4 /*yield*/, api_1.default.getSurveyToken(schoolCode, user)];
                case 14:
                    surveyToken = _a.sent();
                    logger_1.default.logStep('설문 전송에 사용되는 토큰 가져오기 완료');
                    // Step 7. 설문 전송
                    return [4 /*yield*/, api_1.default.registerServey(surveyToken, user.name)];
                case 15:
                    // Step 7. 설문 전송
                    _a.sent();
                    logger_1.default.logStep('설문 데이터 전송 완료');
                    // TODO Step 7. 정상적으로 처리되었는지 확인
                    logger_1.default.logSuccess();
                    logger_1.default.logNormal("*** \uC774 \uC2A4\uD06C\uB9BD\uD2B8\uB294 \uB0B4\uC77C " + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toLocaleTimeString() + "\uC5D0 \uB2E4\uC2DC \uC2E4\uD589\uB429\uB2C8\uB2E4! ***");
                    setTimeout(run, 24 * 60 * 60 * 1000);
                    return [2 /*return*/];
            }
        });
    });
})();
//# sourceMappingURL=index.js.map