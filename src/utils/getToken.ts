import { IHeader, IRequest } from "../types";

export const getToken = ( req: IRequest ) => {
    const header: IHeader = req.headers;
    const token = header.authorization?.split(" ")[1];
    return token;
} 