import { Schema, model } from "mongoose";

interface IAddress {
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    receiver_name: string,
    phone: string,
    address: {
        township: string,
        street: string
    }
}

const addressSchema: Schema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
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

const Address = model<IAddress>('Address', addressSchema);
export default Address;
