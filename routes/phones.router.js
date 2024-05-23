import {Router} from 'express'
import { task1, task4, task5, task6, task7 } from '../controllers/phones.controller.js'

const router = Router();

router.get("/task1", task1)
router.get("/task4", task4)
router.get("/task5", task5)
router.get("/task6", task6)
router.get("/task7", task7)

export default router;