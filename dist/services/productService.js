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
exports.addToCartService = exports.findProudctAndDelete = exports.findProudctAndUpdate = exports.findAllProduct = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
const userModel_1 = __importDefault(require("../models/userModel"));
const findAllProduct = () => {
    return productModel_1.default.find();
};
exports.findAllProduct = findAllProduct;
const findProudctAndUpdate = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    const body = req.body;
    const updatedProduct = yield productModel_1.default.findByIdAndUpdate(productId, body);
    if (!updatedProduct) {
        return false;
    }
    return updatedProduct;
});
exports.findProudctAndUpdate = findProudctAndUpdate;
const findProudctAndDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProduct = yield productModel_1.default.findByIdAndDelete(id);
    console.log(deletedProduct);
    if (!deletedProduct) {
        return false;
    }
    return deletedProduct;
});
exports.findProudctAndDelete = findProudctAndDelete;
const addToCartService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.userAuth.id;
    const productId = req.body.product_id;
    const productQuantity = req.body.quantity;
    const user = yield userModel_1.default.findById({ _id });
    let cartProducts = user === null || user === void 0 ? void 0 : user.cart.products;
    const existingProductIndex = cartProducts.findIndex((product) => product.product_id.toString() === productId);
    const product = yield productModel_1.default.findById(productId);
    if (existingProductIndex > -1) {
        cartProducts[existingProductIndex].quantity += productQuantity || 1;
        user.cart.products = cartProducts;
        yield user.save();
    }
    else {
        const newProduct = {
            product_id: productId,
            quantity: productQuantity || 1,
            price: product === null || product === void 0 ? void 0 : product.price
        };
        user.cart.products.push(newProduct);
        yield user.save();
    }
    return user.cart.products;
});
exports.addToCartService = addToCartService;
//# sourceMappingURL=productService.js.map