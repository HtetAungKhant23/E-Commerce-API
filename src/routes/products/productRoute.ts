import { Router } from "express";
import { getAllProducts, createProduct, updateProduct, deleteProduct } from "../../controllers/products/prodcutController";

const router: Router = Router();

router.get('/products', getAllProducts );
router.post('/products', createProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;