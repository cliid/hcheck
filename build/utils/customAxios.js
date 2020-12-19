"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = __importDefault(require("./constants"));
var customAxios = axios_1.default.create({
    baseURL: constants_1.default.baseUrl,
    headers: {
        Accept: constants_1.default.acceptConfig,
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': constants_1.default.jsonContentType,
        'User-Agent': constants_1.default.fakeUserAgent,
    },
});
customAxios.setToken = function (tk) {
    customAxios.defaults.headers.common['Authorization'] = tk;
};
customAxios.setRequestUrl = function (url) {
    customAxios.defaults.baseURL = url;
};
exports.default = customAxios;
//# sourceMappingURL=customAxios.js.map