import express from "express"
import { addState } from "../Controller/state.controller.js"

const router = express.Router()

router.post("/add-state", addState)

export default router