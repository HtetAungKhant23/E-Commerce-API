import { NextFunction, Request, Response } from "express";
import { verifyToekn } from "../utils/verifyToken";
import { getToken } from "../utils/getToken";

export const isAuth = ( req: Request, res: Response, next: NextFunction ) => {
    const token = getToken(req);
    const payload = verifyToekn(token);
    if(!payload){
            const err = new Error('Invalid/expired token! Please Login agian!');
            err.statusCode = 422;        
            throw(err);
        }
    req.userAuth = payload;
    next();   
}