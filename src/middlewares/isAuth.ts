import { NextFunction, RequestParamHandler, Response } from "express";
import { verifyToekn } from "../utils/verifyToken";
import { getToken } from "../utils/getToken";
import { IError, IRequest } from "../types";

export const isAuth: any= ( req: IRequest, res: Response, next: NextFunction ) => {
    const token = getToken(req);
    const payload = verifyToekn(token);
    if(!payload){
            const err: IError = new Error('Invalid/expired token! Please Login agian!');
            err.statusCode = 422;        
            throw(err);
        }
    req.userAuth = payload;
    next();   
}