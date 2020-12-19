"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("./constants"));
var node_rsa_1 = __importDefault(require("node-rsa"));
function encrypt(str) {
    var key = new node_rsa_1.default({ b: 1024 });
    key.setOptions({ encryptionScheme: 'pkcs1' });
    key.importKey(constants_1.default.publicKey, 'pkcs8-public');
    return key.encrypt(str, 'base64');
}
exports.default = encrypt;
//# sourceMappingURL=encrypt.js.map