import { Request, Response, NextFunction } from "express";
import { successResponse } from "../middlewares/errorHandlers/responseHandler";

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
     try {
       
        const order = await createAnOrder(req);
       res.status(201).json(
            successResponse(
                {},
                'success',
                200
            )
        );

    }catch(err: any){
        next(err);
    }
}