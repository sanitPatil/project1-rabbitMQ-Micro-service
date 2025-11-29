import e from "express";
import { UserController } from "../controller/user";

const userRouter = e.Router();

userRouter.route("/get-users").get(UserController.getAllusers);
userRouter.route("/register").post(UserController.registerUser);

export default userRouter;
