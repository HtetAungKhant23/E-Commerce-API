import { Router } from "express";
import { isAuth } from "../middlewares/isAuth";
import { createOrder } from "../controllers/orderController";

const router: Router = Router();

router.post('/', isAuth, createOrder);

export default router;