"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cli_table3_1 = __importDefault(require("cli-table3"));
var chalk_1 = __importDefault(require("chalk"));
exports.default = (function (schoolList) {
    var table = new cli_table3_1.default({
        head: ['학교 이름', '학교 주소', '학교 코드'],
        style: { head: ['green'] },
    });
    schoolList.forEach(function (item) {
        return table.push([item.name, item.address, chalk_1.default.cyan.bold(item.code)]);
    });
    return table.toString();
});
//# sourceMappingURL=generateSchoolListTable.js.map