import {IRootController, RouteHandler} from "./root.types";


export class RootController implements IRootController {
	delete: RouteHandler = (req, res) => {
	
	}
	get: RouteHandler = (req, res) => {
		res.json({
			success: true
		})
	}
	post: RouteHandler = (req, res) => {
		res.json({
			success: true
		})
	}
	update: RouteHandler = (req, res) => {
	}
	
}

