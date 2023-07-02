"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const responseHandler_1 = require("./responseHandler");
const errorHandler = (err, req, res, next) => {
    const message = err.message;
    if (!err.statusCode) {
        err.statusCode = 500;
    }
    res.status(err.statusCode).json((0, responseHandler_1.errorResponse)(null, err.statusCode, message));
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map