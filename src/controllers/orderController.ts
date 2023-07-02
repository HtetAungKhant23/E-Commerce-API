import { Request, Response, NextFunction } from "express";
import { successResponse } from "../middlewares/errorHandlers/responseHandler";
import createAnOrder from "../services/orderService";
import { IRequest } from "../types";

export const createOrder:any = async (req: IRequest, res: Response, next: NextFunction) => {
     try {
        const order = await createAnOrder(req);
        res.status(201).json(
            successResponse(
                order,
                'successfully order created!',
                200
            )
        );

    }catch(err: any){
        next(err);
    }
}