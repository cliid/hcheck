"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkPassword_1 = __importDefault(require("./checkPassword"));
var getGroupList_1 = __importDefault(require("./getGroupList"));
var getSurveyToken_1 = __importDefault(require("./getSurveyToken"));
var findUser_1 = __importDefault(require("./findUser"));
var registerServey_1 = __importDefault(require("./registerServey"));
var searchSchool_1 = __importDefault(require("./searchSchool"));
exports.default = {
    checkPassword: checkPassword_1.default,
    getGroupList: getGroupList_1.default,
    getSurveyToken: getSurveyToken_1.default,
    findUser: findUser_1.default,
    registerServey: registerServey_1.default,
    searchSchool: searchSchool_1.default,
};
//# sourceMappingURL=index.js.map