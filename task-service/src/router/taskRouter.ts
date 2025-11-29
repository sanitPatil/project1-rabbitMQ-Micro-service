import e from "express";
import { Task } from "../controller/task";

const taskRouter = e.Router();

// GET ALL TASK
// CREATE TASK
taskRouter.route("/get-task").get(Task.getAllTask);
taskRouter.route("/create-task").post(Task.createTask);

export default taskRouter;
