export interface IAPI {
	url: string
	method: "POST" | "GET" | "PUT" | "DELETE"
	data?: any
}
