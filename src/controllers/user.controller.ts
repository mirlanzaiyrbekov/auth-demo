import { Request, Response } from "express"
import { generateToken } from "../libs/jwt"
import {
	findUserByEmail,
	registerUser,
	validatePassword,
} from "../services/user.service"

export const register = async (req: Request, res: Response) => {
	const { email, password } = req.body

	if (!email || !password)
		return res.status(400).json({ error: "Email and password required." })

	try {
		const existing = await findUserByEmail(email)
		if (existing) return res.status(400).json({ error: "User already exists." })

		const user = await registerUser(email, password)
		const token = generateToken({ id: user.id })

		res.json({ token })
	} catch (err) {
		res.status(500).json({ error: "Server error" })
	}
}

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body

	if (!email || !password)
		return res.status(400).json({ error: "Email and password required." })

	const user = await findUserByEmail(email)
	if (!user) return res.status(401).json({ error: "Invalid credentials" })

	const isValid = await validatePassword(password, user.password)
	if (!isValid) return res.status(401).json({ error: "Invalid credentials" })

	const token = generateToken({ id: user.id })
	res.json({ token })
}
