import bcrypt from "bcryptjs"
import { prisma } from "../prisma/client"

export const registerUser = async (email: string, password: string) => {
	try {
		const hash = await bcrypt.hash(password, 10)
		return await prisma.user.create({ data: { email, password: hash } })
	} catch (error) {
		throw error
	}
}

export const authenticateUser = async (email: string, password: string) => {
	try {
		const user = await prisma.user.findUnique({ where: { email } })
		if (!user) return null

		const isMatch = await bcrypt.compare(password, user.password)
		return isMatch ? user : null
	} catch (error) {
		throw error
	}
}
