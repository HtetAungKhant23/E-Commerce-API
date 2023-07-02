"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
function successResponse(data, message, statusCode) {
    return {
        message: message ? message : "",
        data,
        statusCode,
    };
}
exports.successResponse = successResponse;
function errorResponse(data, statusCode, message, errors) {
    return {
        data,
        errors: errors || [],
        statusCode,
        message: message ? message : "",
    };
}
exports.errorResponse = errorResponse;
//# sourceMappingURL=responseHandler.js.map