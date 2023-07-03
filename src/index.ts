import express, { Express, Request, Response } from "express";
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

app.get('/api/v1', (req: Request, res: Response) => {
  // res.send('<html><head><title>Document</title><body><h1>Welcome From Ecommerce API(version 1)</h1><a href=https://github.com/HtetAungKhant23/E-Commerce-API.git>Source Code</a></body></html>');
  res.redirect('https://api-doc-ecommerce.onrender.com/doc.html');
});
app.use('/api/v1/products', productRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/cart', cartRouter);
app.use('/api/v1/orders', orderRouter);

app.use(errorHandler);
connection(app);
