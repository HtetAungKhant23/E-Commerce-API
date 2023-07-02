"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const responseHandler_1 = require("../middlewares/errorHandlers/responseHandler");
const userService_1 = require("../services/userService");
const userModel_1 = __importDefault(require("../models/userModel"));
const generateToken_1 = require("../utils/generateToken");
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isUserAlreadyExited = yield userModel_1.default.findOne({ email: req.body.email });
        if (isUserAlreadyExited) {
            const err = new Error('User already exist with this email!');
            err.statusCode = 403;
            throw (err);
        }
        const user = yield (0, userService_1.createUser)(req);
        res.status(201).json((0, responseHandler_1.successResponse)({}, 'register success!', 201));
    }
    catch (err) {
        next(err);
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, userService_1.loginUser)(req);
        if (!user) {
            const err = new Error('email does not found or password is wrong!');
            err.statusCode = 403;
            throw (err);
        }
        const token = (0, generateToken_1.generateToken)({ id: user._id, role: user.role });
        const data = {
            name: user.user_name,
            email: user.email,
            token: token
        };
        res.status(200).json((0, responseHandler_1.successResponse)(data, 'login successful', 200));
    }
    catch (err) {
        next(err);
    }
});
exports.login = login;
//# sourceMappingURL=authController.js.map