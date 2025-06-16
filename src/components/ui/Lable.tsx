import React from "react"

interface LabelProps {
	htmlFor: string
	icon: React.ReactNode
	text: string
}

export const Label: React.FC<LabelProps> = ({ htmlFor, icon, text }) => {
	return (
		<label
			htmlFor={htmlFor}
			className="
                absolute left-1 top-1/2 -translate-y-1/2
                text-sm text-gray-500 flex items-center gap-1.5
                transition-all duration-200
                peer-placeholder-shown:top-1/2
                peer-placeholder-shown:text-sm
                peer-focus:text-xs
                peer-focus:text-gray-700
                peer-[:not(:placeholder-shown)]:-top-3.5
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:text-gray-700
            "
		>
			{icon}
			{text}
		</label>
	)
}
