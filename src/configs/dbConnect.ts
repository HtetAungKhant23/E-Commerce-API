import { connect } from "mongoose";
import { Express } from "express";
import * as dotenv from "dotenv";
dotenv.config();

const Url: string = process.env.MONGO_URL || '';
const Port = process.env.PORT || 5000;

export const connection = async (app: Express) => {
    try {
        await connect(Url);
        console.log('connected database....');
        app.listen(Port, () => {
            console.log('server is running...');
        });
    } catch (err: unknown) {
        console.log(err);
    }
}