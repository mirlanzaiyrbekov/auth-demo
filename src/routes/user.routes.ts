import { Router } from "express"
import { login, register } from "../controllers/user.controller"

const router = Router()

router.post("/user", register)
router.post("/user/auth", login)

export default router
