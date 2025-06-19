import type { IAPI } from "../interfaces/api.interface"

const API_URI = import.meta.env.VITE_API_URI
export const API = async <T>({ url, method, data }: IAPI): Promise<T> => {
	try {
		const response = await fetch(`${API_URI}/${url}`, {
			method,
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		})
		const dataParsed = await response.json()
		return dataParsed
	} catch (error) {
		return Promise.reject(error)
	}
}
