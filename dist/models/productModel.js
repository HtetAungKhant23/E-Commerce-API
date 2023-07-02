"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    brand: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        reuqird: true,
        default: 0
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category',
    },
    stock_status: {
        type: String,
        enum: ['auto', 'instock', 'outOfStock'],
        default: 'auto'
    },
    stock: {
        type: Number,
    },
}, { timestamps: true });
const Poroduct = (0, mongoose_1.model)('Product', productSchema);
exports.default = Poroduct;
//# sourceMappingURL=productModel.js.map