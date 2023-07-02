"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToekn = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../configs/config");
const verifyToekn = (token) => {
    const decodedPayload = jsonwebtoken_1.default.verify(token || "", config_1.config.JWT_SECRET_KEY);
    if (!decodedPayload) {
        return false;
    }
    return decodedPayload;
};
exports.verifyToekn = verifyToekn;
//# sourceMappingURL=verifyToken.js.map