"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("../utils/logger"));
var customAxios_1 = __importDefault(require("../utils/customAxios"));
function registerServey(token, username) {
    var requestJson = {
        deviceUuid: '',
        rspns00: 'Y',
        rspns01: '1',
        rspns02: '1',
        rspns03: null,
        rspns04: null,
        rspns05: null,
        rspns06: null,
        rspns07: null,
        rspns08: null,
        rspns09: '0',
        rspns10: null,
        rspns11: null,
        rspns12: null,
        rspns13: null,
        rspns14: null,
        rspns15: null,
    };
    try {
        customAxios_1.default.post('/registerServey', __assign(__assign({}, requestJson), { upperToken: token, upperUserNameEncpt: username }));
    }
    catch (err) {
        logger_1.default.logError(err);
        process.exit(1);
    }
}
exports.default = registerServey;
//# sourceMappingURL=registerServey.js.map