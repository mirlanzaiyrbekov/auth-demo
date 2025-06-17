import bcrypt from "bcryptjs"
import { prisma } from "../prisma/prisma.client"

export const registerUser = async (email: string, password: string) => {
	const hashed = await bcrypt.hash(password, 10)
	return prisma.user.create({
		data: { email, password: hashed },
	})
}

export const findUserByEmail = (email: string) => {
	return prisma.user.findUnique({ where: { email } })
}

export const validatePassword = (password: string, hash: string) => {
	return bcrypt.compare(password, hash)
}
