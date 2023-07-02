import express, { Express } from "express";
import fs from "fs";
import path from "path";
import { connection } from "./configs/dbConnect";
import productRouter from "./routes/productRoute";
import authRouter from "./routes/authRoute";
import { errorHandler } from "./middlewares/errorHandlers/errorHandler";
import cartRouter from "./routes/cartRoute";
import orderRouter from "./routes/orderRoute";
import cors from "cors";

const app: Express = express();
app.use(express.json());

app.use(cors({
  credentials: true,
}));

app.get('/api/v1', function(req, res) {
  let filePath = path.join(__dirname + "/views/doc.html");
  filePath = filePath.replace('\\', '/');
  res.sendFile(filePath);
});
app.use('/api/v1/products', productRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/cart', cartRouter);
app.use('/api/v1/orders', orderRouter);

app.use(errorHandler);
connection(app);
