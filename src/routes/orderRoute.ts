import { Router } from "express";
import { isAuth } from "../middlewares/isAuth";

const router: Router = Router();

router.post('/', isAuth, );

export default router;