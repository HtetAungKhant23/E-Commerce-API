"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = require("../middlewares/isAuth");
const orderController_1 = require("../controllers/orderController");
const router = (0, express_1.Router)();
router.post('/', isAuth_1.isAuth, orderController_1.createOrder);
exports.default = router;
//# sourceMappingURL=orderRoute.js.map