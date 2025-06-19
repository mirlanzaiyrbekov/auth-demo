import { API } from "../api/api"
import type { authTypeResponse } from "../types/auth.types"
import type { AuthSchemeType } from "../types/form.types"

export const authService = {
	/**
	 * @description LOGIN HANDLER
	 * @returns TOKEN
	 */
	login: async (data: AuthSchemeType): Promise<authTypeResponse> =>
		API({ method: "POST", url: "user/auth", data }),

	/**
	 * @description REGISTER HANDLER
	 * @returns TOKEN
	 */
	register: async (data: AuthSchemeType): Promise<authTypeResponse> =>
		API({ method: "POST", url: "user", data }),
}
