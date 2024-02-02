import express from "express"
import { addState, getState, getDistrict } from "../Controller/state.controller.js"

const router = express.Router()

router.post("/add-state", addState)

router.get("/get-state", getState)

router.get("/get-district", getDistrict)

export default router
