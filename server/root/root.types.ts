import {RequestHandler} from "express";

export type RouteHandler = RequestHandler


export interface IRootController {
	get: RouteHandler
	post: RouteHandler
	delete: RouteHandler
	update: RouteHandler
}
