import express from "express"
import dotenv from "dotenv"
import connectDb from "./DB/ConnectDB.js"
import stateRouter from "./Routes/state.route.js"

const app = express()

dotenv.config()

connectDb()

app.use(express.json())

app.use(stateRouter)

//middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})

const port = 3000

app.listen(3000, () => {
    console.log(`Server is running on the port ${port}`)
})