import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import userRoutes from "./routes/user.routes"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(userRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`)
})
