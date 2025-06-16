import { z } from "zod"

export const AuthScheme = z.object({
	email: z
		.string()
		.min(2, "Минимальная длина 2 символа.")
		.max(50, "Максимальная длина 50 символов")
		.email({ message: "Введите валидный E-mail" }),
	password: z
		.string()
		.min(2, "Минимальная длина 2 символа.")
		.max(50, "Максимальная длина 50 символов"),
})
