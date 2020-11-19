import * as express from "express";
import { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/users", function (req: Request, res: Response) {

});

app.get("/users/:id", function(req: Request, res: Response) {

});

app.post("/users", function(req: Request, res: Response) {
  
});

app.put("/users/:id", function(req: Request, res: Response) {

});

app.delete("/users/:id", function(req: Request, res: Response) {

});

app.listen(3000);