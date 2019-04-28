import express, {RequestHandler} from "express"
import helmet from "helmet"
import {urlencoded, json} from "body-parser"
import {routing} from "./routing";
import cors from "cors";

const app = express()

app.use(cors())
app.use(helmet())

app.use(urlencoded({extended: false}))

app.use(json())

routing(app)

app.listen(process.env.PORT || 4000, () => {
	console.log(` App is running at http://localhost:${process.env.PORT || 4000}`,);
	console.log("  Press CTRL-C to stop\n");
})
