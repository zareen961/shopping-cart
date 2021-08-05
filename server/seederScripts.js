import 'dotenv'
import { config } from "dotenv"
config()

import products from './data/products.js'
import { connectDB } from './config/db.js'
import  Product  from './models/Products.js'

connectDB()

const importData = async() => {
    try{
        await Product.deleteMany({})

        await Product.insertMany(products)

        console.log("Data Import Success");

        process.exit()
    }catch(error){
        console.error("Error with import");
        process.exit(1)
    }
}

importData()

