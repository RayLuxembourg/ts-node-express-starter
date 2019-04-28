import express, {Express} from "express";
import {rootRouting} from "./root/root.routing";


export const routing = (app: Express) => {
	app.use('/', rootRouting)
}
