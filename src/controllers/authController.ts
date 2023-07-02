import { Request, Response, NextFunction } from "express";
import { successResponse } from "../middlewares/errorHandlers/responseHandler";
import { createUser, loginUser } from "../services/userService";
import User from "../models/userModel";
import { generateToken } from "../utils/generateToken";
import { IError } from "../types";

export const register = async ( req: Request, res: Response, next: NextFunction ) => {
    try{
        const isUserAlreadyExited = await User.findOne({email: req.body.email});

        if(isUserAlreadyExited) {
            const err: IError = new Error('User already exist with this email!');
            err.statusCode = 403;
            throw(err);
        }
        const user = await createUser(req);
        res.status(201).json(
            successResponse(
                {},
                'register success!',
                201
            )
        );

    }catch(err: any){
        next(err);
    }
}

export const login = async ( req: Request, res: Response, next: NextFunction ) => {
    try{
        const user = await loginUser(req);
        if(!user){
            const err: IError = new Error('email does not found or password is wrong!');
            err.statusCode = 403;
            throw(err);
        }
        const token = generateToken({id: user._id, role: user.role});
        const data = {
            name: user.user_name,
            email: user.email,
            token: token
        }
        res.status(200).json(
            successResponse(
                data,
                'login successful',
                200
            )
        )
    }catch(err: any){
        next(err);
    }
}