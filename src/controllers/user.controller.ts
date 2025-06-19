import { Request, RequestHandler, Response } from "express"
import { generateToken } from "../libs/jwt"
import { authenticateUser, registerUser } from "../services/user.service"

export const register: RequestHandler = async (
	req: Request,
	res: Response
): Promise<any> => {
	const { email, password } = req.body
	if (!email || !password)
		return res.status(400).json({ error: "Email and password required." })

	try {
		const user = await registerUser(email, password)
		const token = generateToken({ id: user.id })
		res.status(200).json({ token })
	} catch (err: any) {
		res.status(400).json({ error: "User already exists." })
	}
}

export const login: RequestHandler = async (
	req: Request,
	res: Response
): Promise<any> => {
	const { email, password } = req.body
	if (!email || !password)
		return res.status(400).json({ error: "Email and password required." })

	try {
		const user = await authenticateUser(email, password)
		if (!user) return res.status(401).json({ error: "Invalid credentials." })
		const token = generateToken({ id: user.id })
		res.status(200).json({ token })
	} catch (error) {
		res.status(500).json({ error: "Server error." })
	}
}
