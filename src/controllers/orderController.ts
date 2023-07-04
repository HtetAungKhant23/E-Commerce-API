import { Response, NextFunction } from "express";
import { successResponse } from "../middlewares/errorHandlers/responseHandler";
import { IError, IRequest } from "../types";
import { createAnOrder, getAllOrder, updateOrderByUser } from "../services/orderService";

export const createOrder:any = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        const { newOrder, err } = await createAnOrder(req);
        if(err){
            throw err;
        }
        res.status(201).json(
            successResponse(
                newOrder,
                'successfully order created!',
                200
            )
        );
    }catch(err: any){
        next(err);
    }
}

export const getOrder: any = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        const { orders, err } = await getAllOrder();
        if(err){
            throw err; 
        }
        res.status(200).json(
            successResponse(
                orders,
                'getting orders successfully',
                200
            )
        );
    }catch(err: any){
        next(err);
    }    
}

export const updateOrder: any = async (req: IRequest, res: Response, next: NextFunction) => {
    try{
        const { updateOrder, err }: any = await updateOrderByUser(req);
        if(err){
            throw err;
        }
        res.status(200).json(
            successResponse(
                updateOrder,
                'Order is successfully updated!',
                200
            )
        );
    }catch(err: unknown){
        next(err);
    }
}

export const deleteOrder: any = async (req: IRequest, res: Response, next: NextFunction) => {
    
}