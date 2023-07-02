"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    user_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        products: [
            {
                product_id: {
                    type: mongoose_1.Schema.Types.ObjectId,
                    ref: 'Product',
                },
                price: Number,
                quantity: Number
            }
        ]
    }
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
//# sourceMappingURL=userModel.js.map