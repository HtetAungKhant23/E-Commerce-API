import { Request } from "express";
import Order from "../models/orderModel";
import User from "../models/userModel";
import { IRequest } from "../types";

const createAnOrder = async (req: IRequest) => {
    const user_id = req.userAuth.id;
    const user:any = await User.findById(user_id);
    let cartProducts = user?.cart.products;
    let total_price = 0;
    cartProducts.map(
        (product: any) => total_price += (product.price * product.quantity)
    );
    const order = new Order({
        user_id,
        products: cartProducts,
        total_price
    })
    await order.save();
    user.cart.products = [];
    await user.save();
    return order;
}

export default createAnOrder;