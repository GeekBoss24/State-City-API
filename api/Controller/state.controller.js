import State from "../Schema/State.schema.js"
import errorHandler from "../Utils/error.js"

const addState = async(req, res, next) => {
    try{
        const { state, district } = req.body

        if(!state || !district || state === "" || district === ""){
            next(errorHandler(400, "All feilds are required"))
        }

        const newState = new State({
            state,
            district
        })

        await newState.save()
        res.json("State added successfull")
    }
    catch(err){
        next(err)
    }
}

const getState = async(req, res, next) => {
    try{
        const data = await State.find()

        res.status(200).send({
            message:data,
            status:1
        })
    }
    catch(err){
        next(err)
    }
}

const getDistrict = async(req, res, next) => {
    try{
        const { state } = req.body
        const data = await State.findOne({ state })
        res.status(200).send({
            message:data,
            status:1
        })
    }
    catch(err){
        next(err)
    }
}

export { addState, getState, getDistrict }
