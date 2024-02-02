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

export { addState }