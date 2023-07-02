"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const addressSchema = new mongoose_1.Schema({
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiver_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        township: String,
        street: String,
        required: true
    }
});
const Address = (0, mongoose_1.model)('Address', addressSchema);
exports.default = Address;
//# sourceMappingURL=addressModel.js.map