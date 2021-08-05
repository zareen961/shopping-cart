import 'dotenv' 
import { config } from "dotenv"
import express from 'express'
import { connectDB } from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'

config()

connectDB()

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api/products', productRoutes)

app.get('/',(req,res) => {
    return res.send('Shopping Cart Server')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})