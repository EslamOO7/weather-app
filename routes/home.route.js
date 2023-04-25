import { Router } from "express";
import {home }from"../controllers/home.ctrl.js"
const route = Router();

route.get('/', home)

export default route