"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var step = 1;
var totalStep = 7;
var logStep = function (str) {
    console.log(chalk_1.default.cyan("(" + step++ + "/" + totalStep + ")") + " " + str);
};
var logError = function (err) {
    var str = '';
    if (err instanceof Error) {
        if (typeof err.stack !== 'undefined') {
            str = err.stack;
        }
    }
    else {
        str = err;
    }
    console.error(chalk_1.default.red(str));
};
var logSuccess = function () {
    console.log(chalk_1.default.green('자가진단을 완료하였습니다!'));
};
var logNormal = function (str) {
    console.log(chalk_1.default.blueBright.bold(str));
};
var logDisclaimer = function () {
    console.log(chalk_1.default.yellow.bold("\n" + chalk_1.default.inverse('경고') + " \uC774 \uC2A4\uD06C\uB9BD\uD2B8\uB294 \uAC74\uAC15\uC0C1\uC758 \uBB38\uC81C\uAC00 \uC5C6\uB294 \uC0AC\uB78C\uC774 \uBE60\uB974\uAC8C \uC790\uAC00\uC9C4\uB2E8\uC744 \uD560 \uC218 \uC788\uAC8C \uD558\uB294 \uBAA9\uC801\uC73C\uB85C \uAC1C\uBC1C\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB9CC\uC57D \uCF54\uB85C\uB09819 \uC758\uC2EC \uC99D\uC0C1\uC774 \uC788\uB2E4\uBA74 \uC774 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uB9C8\uC2DC\uACE0 \uC9C1\uC811 \uC790\uAC00\uC9C4\uB2E8 \uD398\uC774\uC9C0\uC5D0 \uAC00\uC11C \uC790\uAC00\uC9C4\uB2E8\uC744 \uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4."));
};
exports.default = { logStep: logStep, logError: logError, logSuccess: logSuccess, logDisclaimer: logDisclaimer, logNormal: logNormal };
//# sourceMappingURL=logger.js.map