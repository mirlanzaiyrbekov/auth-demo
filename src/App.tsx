import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { Signin, SignUp } from "./components"
import type { AuthType } from "./types/form.types"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export default function App() {
	const [authType, setAuthType] = React.useState<AuthType>("login")

	return (
		<QueryClientProvider client={queryClient}>
			<div className="min-h-screen bg-gray-50 flex flex-col gap-10 items-center justify-center">
				<h4 className="text-2xl font-bold">Auth Demo</h4>
				<div className="p-8 rounded-md shadow-sm bg-white max-w-md w-full">
					{authType === "login" ? (
						<Signin handle={setAuthType} />
					) : (
						<SignUp handle={setAuthType} />
					)}
				</div>
			</div>
		</QueryClientProvider>
	)
}
