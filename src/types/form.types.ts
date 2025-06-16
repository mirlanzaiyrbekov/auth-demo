import type { z } from "zod"
import type { AuthScheme } from "../schemas/schemas"

export type AuthType = "login" | "register"
export type FormButtonType = React.Dispatch<React.SetStateAction<AuthType>>
export type AuthSchemeType = z.infer<typeof AuthScheme>
