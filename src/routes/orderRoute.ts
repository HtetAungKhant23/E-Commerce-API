import { Router } from "express";
import { isAuth } from "../middlewares/isAuth";
import { createOrder, getOrder, updateOrder } from "../controllers/orderController";

const router: Router = Router();

router.post('/', isAuth, createOrder);
router.patch('/', isAuth, updateOrder);
router.get('/', isAuth, getOrder);

export default router;