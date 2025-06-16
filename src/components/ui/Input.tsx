import React, { type InputHTMLAttributes } from "react"
import { cn } from "../../libs/utils"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ type = "text", error, className, ...props }, ref) => {
		return (
			<>
				<input
					className={cn(
						" outline-0 border border-gray-200 p-3.5 rounded-md peer pt-5",
						"placeholder:text-sm w-full text-sm text-gray-600",
						error ? "border-red-500" : "",
						className
					)}
					type={type}
					{...props}
					ref={ref}
				/>
				{error && <span className="text-red-500 text-xs mt-1">{error}</span>}
			</>
		)
	}
)
