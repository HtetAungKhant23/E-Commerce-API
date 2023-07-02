"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const verifyToken_1 = require("../utils/verifyToken");
const getToken_1 = require("../utils/getToken");
const isAuth = (req, res, next) => {
    const token = (0, getToken_1.getToken)(req);
    const payload = (0, verifyToken_1.verifyToekn)(token);
    if (!payload) {
        const err = new Error('Invalid/expired token! Please Login agian!');
        err.statusCode = 422;
        throw (err);
    }
    req.userAuth = payload;
    next();
};
exports.isAuth = isAuth;
//# sourceMappingURL=isAuth.js.map