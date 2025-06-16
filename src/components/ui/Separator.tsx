import type React from "react"
import type { HTMLAttributes } from "react"
import { cn } from "../../libs/utils"

export const Separator: React.FC<HTMLAttributes<HTMLDivElement>> = ({
	className,
}) => {
	return <div className={cn("h-px w-full bg-gray-200 my-2", className)}></div>
}
