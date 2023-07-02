"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnect_1 = require("./configs/dbConnect");
const productRoute_1 = __importDefault(require("./routes/productRoute"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const errorHandler_1 = require("./middlewares/errorHandlers/errorHandler");
const cartRoute_1 = __importDefault(require("./routes/cartRoute"));
const orderRoute_1 = __importDefault(require("./routes/orderRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1/products', productRoute_1.default);
app.use('/api/v1/auth', authRoute_1.default);
app.use('/api/v1/cart', cartRoute_1.default);
app.use('/api/v1/orders', orderRoute_1.default);
app.use(errorHandler_1.errorHandler);
(0, dbConnect_1.connection)(app);
//# sourceMappingURL=index.js.map