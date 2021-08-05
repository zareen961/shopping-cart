import 'dotenv'
import { config } from "dotenv"
import mongoose from "mongoose"

config()


export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('<<<----Connected to DataBase---->>>');
    }catch(error){
        console.error("MongoDB connection FAIL " + error)
        process.exit(1)
    }
}

// module.exports = connectDB