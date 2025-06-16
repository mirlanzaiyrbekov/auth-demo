import { zodResolver } from "@hookform/resolvers/zod"
import { KeySquare, UserRound, UserRoundPlus } from "lucide-react"
import type React from "react"
import { Controller, useForm } from "react-hook-form"
import { AuthScheme } from "../schemas/schemas"
import type { AuthSchemeType, FormButtonType } from "../types/form.types"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { Label } from "./ui/Lable"
import { Separator } from "./ui/Separator"

export const Signin: React.FC<{ handle: FormButtonType }> = ({ handle }) => {
	const { control, handleSubmit } = useForm<AuthSchemeType>({
		resolver: zodResolver(AuthScheme),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const submitHandle = (data: AuthSchemeType) => {
		console.log(data)
	}

	return (
		<form className="flex flex-col gap-3" onSubmit={handleSubmit(submitHandle)}>
			<Controller
				name="email"
				control={control}
				render={({ field, fieldState: { error } }) => (
					<div className="flex flex-col gap-1.5 relative my-3">
						<Input
							{...field}
							id="email"
							type="email"
							error={error?.message}
							autoComplete="email"
							placeholder=" "
						/>
						<Label
							htmlFor="email"
							icon={<UserRound size={16} />}
							text="E-mail"
						/>
					</div>
				)}
			/>

			<Controller
				name="password"
				control={control}
				render={({ field, fieldState: { error } }) => (
					<div className="flex flex-col gap-1.5 relative my-3">
						<Input
							{...field}
							id="password"
							type="password"
							error={error?.message}
							autoComplete="new-password"
							placeholder=" "
						/>
						<Label
							htmlFor="password"
							icon={<KeySquare size={16} />}
							text="Password"
						/>
					</div>
				)}
			/>

			<Button type="submit" className="bg-black text-white">
				Login
			</Button>

			<div className="flex flex-col gap-3 items-center">
				<Separator className="max-w-52 w-full" />
				<Button
					type="button"
					onClick={() => handle("register")}
					className="border border-gray-300 flex items-center gap-2 justify-center"
				>
					<UserRoundPlus size={16} />
					Register
				</Button>
			</div>
		</form>
	)
}
