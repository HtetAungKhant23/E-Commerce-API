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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashPw = yield bcrypt_1.default.hash(req.body.password, salt);
    const { password, confirm_password } = body, redcueBody = __rest(body, ["password", "confirm_password"]);
    const newBody = Object.assign(Object.assign({}, redcueBody), { password: hashPw });
    const newUser = new userModel_1.default(newBody);
    return yield newUser.save();
});
exports.createUser = createUser;
const loginUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const user = yield userModel_1.default.findOne({ email: body.email });
    const same = yield bcrypt_1.default.compare(body.password, (user === null || user === void 0 ? void 0 : user.password) || "");
    if (!same || !user) {
        return false;
    }
    return user;
});
exports.loginUser = loginUser;
//# sourceMappingURL=userService.js.map