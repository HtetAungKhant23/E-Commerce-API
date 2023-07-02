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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCart = void 0;
const responseHandler_1 = require("../middlewares/errorHandlers/responseHandler");
const cartService_1 = require("../services/cartService");
const getCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield (0, cartService_1.findAllCart)();
        if (!cart) {
            const err = new Error('cart not found!');
            err.statusCode = 404;
            throw (err);
        }
        res.status(201).json((0, responseHandler_1.successResponse)(cart, 'success', 200));
    }
    catch (err) {
        next(err);
    }
});
exports.getCart = getCart;
//# sourceMappingURL=cartController.js.map