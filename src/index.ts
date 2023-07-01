import express, { Express } from "express";
import { connection } from "./configs/dbConnect";
import router from "./routes/products/productRoute";
import { errorHandler } from "./utils/errorHandler";

const app: Express = express();
app.use(express.json());

app.use('/api/v1', router);
app.use(errorHandler);
connection(app);

