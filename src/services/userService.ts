import { Request } from "express";
import { User } from "../models/userModel";
import bcrypt from "bcrypt";

export const createUser = async ( req: Request ) => {
    const body = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPw = await bcrypt.hash(req.body.password, salt);

        const {
            password, confirm_password, ...redcueBody
        } = body;

        const newBody = {
            ...redcueBody,
            password: hashPw
        }
        
        const newUser = new User(newBody);
        return await newUser.save();
}

export const loginUser = async ( req: Request ) => {
    const body = req.body;
    const user = await User.findOne({email: body.email});
    const same = await bcrypt.compare(body.password, user?.password || "");
    if(!same || !user){
        return false;
    }
    return user;    
}