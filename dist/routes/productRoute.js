"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prodcutController_1 = require("../controllers/prodcutController");
const isAuth_1 = require("../middlewares/isAuth");
const router = (0, express_1.Router)();
router.get('/', isAuth_1.isAuth, prodcutController_1.getAllProducts);
router.post('/', isAuth_1.isAuth, prodcutController_1.createProduct);
router.post('/cart', isAuth_1.isAuth, prodcutController_1.addToCart);
router.patch('/:id', isAuth_1.isAuth, prodcutController_1.updateProduct);
router.delete('/:id', isAuth_1.isAuth, prodcutController_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=productRoute.js.map