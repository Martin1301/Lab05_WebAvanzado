import { Router } from "express";
import * as controller from "./controller";
// import { index, login } from "./controller.js";

const testRouter = Router();

testRouter.route("/").get(controller.index);
testRouter.route("/store").post(controller.store);
testRouter.route("/store/:id").put(controller.update);
testRouter.route("/store/:id").delete(controller.destroy);

// que variable exportamos aqui?
export default testRouter;
