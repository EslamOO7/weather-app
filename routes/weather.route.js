import { Router } from "express";
import {weather }from"../controllers/weather.ctrl.js"
const route = Router();

route.get('/', weather)

export default route