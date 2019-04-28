import express, {Express} from "express";
import {RootController} from "./root.controller";

const {get,post} = new RootController()

const router = express.Router()

router
		.route('/')
		.get(get)
		.post(post)


export const rootRouting = router
