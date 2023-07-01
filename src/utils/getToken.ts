import { Request } from "express";

export const getToken = ( req: Request ) => {
    const header = req.headers;
    const token = header.authorization?.split(" ")[1];
    return token;
} 