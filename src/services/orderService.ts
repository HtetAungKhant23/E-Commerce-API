import Order from "../models/orderModel";
import User from "../models/userModel";
import { IRequest } from "../types";

export const getAllOrder = async () => {
    return await Order.find();
}

export const createAnOrder = async (req: IRequest) => {
    try {

    } catch (err: any) {
        return undefined;
    }
}

