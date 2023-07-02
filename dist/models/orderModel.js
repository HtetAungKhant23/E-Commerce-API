"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderShcema = new mongoose_1.Schema({
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    address_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'address'
    },
    products: [{
            product_id: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 1
            }
        }],
    total_price: {
        type: Number,
        required: true
    },
    confirm_status: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
const Order = (0, mongoose_1.model)('Order', orderShcema);
exports.default = Order;
//# sourceMappingURL=orderModel.js.map