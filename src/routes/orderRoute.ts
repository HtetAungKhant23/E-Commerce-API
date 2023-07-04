import { Router } from "express";
import { isAdmin, isAuth } from "../middlewares/isAuth";
import { createOrder, deleteOrder, getOrder, orderConfirm, updateOrder } from "../controllers/orderController";

const router: Router = Router();

router.get('/', isAuth, getOrder);
router.post('/', isAuth, createOrder);
router.patch('/', isAuth, updateOrder);
router.delete('/', isAuth, deleteOrder);
router.post('/order-confirm', isAuth, isAdmin, orderConfirm);

export default router;