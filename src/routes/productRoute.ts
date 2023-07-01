import { Router } from "express";
import { getAllProducts, createProduct, updateProduct, deleteProduct } from "../controllers/prodcutController";
import { isAuth } from "../middlewares/isAuth";

const router: Router = Router();

router.get('/', isAuth, getAllProducts );
router.post('/', isAuth, createProduct);
router.patch('/:id', isAuth, updateProduct);
router.delete('/:id', isAuth, deleteProduct);

export default router;