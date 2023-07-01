import { Schema, model } from "mongoose";

interface ICart {
    products: {
        product_id: Schema.Types.ObjectId,
        quantity: number,
        ref: 'Product'
    }
}

interface IUser {
    username: string,
    email: string,
    password: string,
    phone?: string,
    role?: number,
    cart?: ICart[]
}

const userSchema: Schema = new Schema({
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
        products: [{
            product_id: {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 1
            },
        }]
    }
});

const User = model<IUser>('User', userSchema);
export { User, ICart };
