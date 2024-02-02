import mongoose from "mongoose"

const stateSchema = mongoose.Schema({
    state:{
        type:String,
        required:true,
        unique:true
    },
    district:{
        type:String,
        required:true,
        unique:true
    }
}, {timestamps:true})

const State = mongoose.model('State', stateSchema)

export default State