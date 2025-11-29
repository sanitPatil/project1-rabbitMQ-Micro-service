import type { NextFunction, Request, Response } from "express";
import { APIError } from "../utils/APIError";
import { taskModel } from "../model/taskModel";
import { taskCreatedProducer } from "../../events/producer/TaskCreatedProduced";

export class Task {
  public static async getAllTask(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const task = await taskModel.find();

      return res.status(200).json({
        message: "successfully fetch All Tasks.",
        task,
      });
    } catch (error) {
      console.log(`❌ failed to fetch Tasks!`);
      return next(new APIError(500, "❌ failed to fetch Tasks!"));
    }
  }

  public static async createTask(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { title, description, userId } = req.body;

      const task = new taskModel({ title, description, userId });
      await task.save();

      await taskCreatedProducer({
        id: task._id.toString(),
        title: task.title,
        description: task.description,
      });

      return res.status(201).json({
        message: "task successfully created",
      });
    } catch (error) {
      console.log(`❌ failed to fetch Tasks!`);
      return next(new APIError(500, "❌ failed to fetch Tasks!"));
    }
  }
}
