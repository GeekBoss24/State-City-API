import mongoose from "mongoose"

const connectDb = async() => {
    try{
        const connect = await mongoose.connect(process.env.mongo_url)
        console.log(`Server is connected to ${connect.connection.host}`)
    }
    catch(err){
        console.error(err)
    }
}

export default connectDb