import { Router } from "express";
import {about }from"../controllers/about.ctrl.js"
const route = Router();

route.get('/', about)
export default route;
