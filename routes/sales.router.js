import {Router} from 'express'
import { task3 } from '../controllers/sales.controller.js';

const router = Router();

router.get("/task2", task3)

export default router;