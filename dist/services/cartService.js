"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllCart = void 0;
const cartModel_1 = __importDefault(require("../models/cartModel"));
const findAllCart = () => {
    return cartModel_1.default.find();
};
exports.findAllCart = findAllCart;
//# sourceMappingURL=cartService.js.map