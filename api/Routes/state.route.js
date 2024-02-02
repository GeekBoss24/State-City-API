import express from "express"
import { addState, getState, getDistrict, allData} from "../Controller/state.controller.js"

const router = express.Router()

router.post("/add-state", addState)

router.get("/get-state", getState)

router.get("/get-district/:state", getDistrict)

router.get('/all-data', allData)

export default router
