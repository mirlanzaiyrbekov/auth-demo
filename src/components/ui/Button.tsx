import React, { type ButtonHTMLAttributes } from "react"
import { cn } from "../../libs/utils"

export const Button = React.forwardRef<
	HTMLButtonElement,
	ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
	return (
		<button
			className={cn(
				"p-3 rounded-md w-full text-sm",
				"cursor-pointer hover:opacity-80 transition-opacity",
				className
			)}
			{...props}
			ref={ref}
		/>
	)
})
