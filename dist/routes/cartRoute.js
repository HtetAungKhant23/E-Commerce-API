"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cartController_1 = require("../controllers/cartController");
const isAuth_1 = require("../middlewares/isAuth");
const router = (0, express_1.Router)();
router.get('/', isAuth_1.isAuth, cartController_1.getCart);
exports.default = router;
//# sourceMappingURL=cartRoute.js.map