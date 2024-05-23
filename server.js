import { app } from "./app.js"
import connectDB from './utils/db.js'
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 3000;
connectDB();


app.listen(PORT, err => {
    err ? console.log("Server couldn't ran") :
    console.log(`Server running on port ${PORT}`)
});
