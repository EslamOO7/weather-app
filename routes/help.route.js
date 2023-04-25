import { Router } from "express";
import {help,helpError }from"../controllers/help.ctrl.js"
const route = Router();

route.get('/',help)
route.get('/*',helpError)

export default route