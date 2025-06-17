import { Router } from "express"
import { login, register } from "../controllers/user.controller"

const router = Router()

router.post("/user", register) // Регистрация
router.post("/user/auth", login) // Авторизация

export default router
