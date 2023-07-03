import { Response, NextFunction } from "express";
import { successResponse } from "../middlewares/errorHandlers/responseHandler";
import { IError, IRequest } from "../types";
import { createAnOrder, getAllOrder } from "../services/orderService";

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

// export const getOrder: any = async (req: IRequest, res: Response, next: NextFunction) => {
//     try {
//         const order = await getAllOrder();
//         if(!order){
//             const err: IError = 
//         }
//     }catch(err: any){
//         next(err);
//     }
    
// }