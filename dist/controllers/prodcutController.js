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
exports.addToCart = exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getAllProducts = void 0;
const productService_1 = require("../services/productService");
const responseHandler_1 = require("../middlewares/errorHandlers/responseHandler");
const productModel_1 = __importDefault(require("../models/productModel"));
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, productService_1.findAllProduct)();
        res.status(200).json((0, responseHandler_1.successResponse)(products, 'success', 200));
    }
    catch (err) {
        next(err);
    }
});
exports.getAllProducts = getAllProducts;
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        if (req.userAuth.role === 0) {
            const err = new Error('access denied! Admin Only!');
            err.statusCode = 400;
            throw (err);
        }
        const newProduct = new productModel_1.default(body);
        yield newProduct.save();
        if (!newProduct) {
            const err = new Error('cannot create product!');
            err.statusCode = 400;
            throw (err);
        }
        res.status(201).json((0, responseHandler_1.successResponse)(newProduct, 'product create successfully!', 201));
    }
    catch (err) {
        next(err);
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.userAuth.role === 0) {
            const err = new Error('access denied! Admin Only!');
            err.statusCode = 400;
            throw (err);
        }
        const updatedProduct = yield (0, productService_1.findProudctAndUpdate)(req);
        if (!updatedProduct) {
            const err = new Error('product is not found!');
            err.statusCode = 404;
            throw err;
        }
        res.status(200).json((0, responseHandler_1.successResponse)({}, `Product is successully deleted with this id = ${updatedProduct._id}`, 200));
    }
    catch (err) {
        next(err);
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    try {
        if (req.userAuth.role === 0) {
            const err = new Error('access denied! Admin Only!');
            err.statusCode = 400;
            throw (err);
        }
        const deletedProduct = yield (0, productService_1.findProudctAndDelete)(productId);
        if (!deletedProduct) {
            const err = new Error('product is not found!');
            err.statusCode = 404;
            throw err;
        }
        res.status(200).json((0, responseHandler_1.successResponse)({}, `Product is successully deleted with this id = ${deletedProduct._id}`, 200));
    }
    catch (err) {
        next(err);
    }
});
exports.deleteProduct = deleteProduct;
const addToCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield (0, productService_1.addToCartService)(req);
        if (cart) {
            res.status(201).json((0, responseHandler_1.successResponse)({}, 'cart added successfully!', 201));
        }
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
exports.addToCart = addToCart;
//# sourceMappingURL=prodcutController.js.map