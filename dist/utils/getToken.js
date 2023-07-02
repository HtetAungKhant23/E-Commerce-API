"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
const getToken = (req) => {
    var _a;
    const header = req.headers;
    const token = (_a = header.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    return token;
};
exports.getToken = getToken;
//# sourceMappingURL=getToken.js.map