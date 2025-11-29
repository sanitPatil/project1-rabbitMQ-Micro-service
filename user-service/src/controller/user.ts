import type { NextFunction, Request, Response } from "express";
import { userModel } from "../model/user.model";
import APIError from "../utils/APIError";

export class UserController {
  // get all users
  // register user
  public static async getAllusers(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const users = await userModel.find();
      return res.status(200).json({
        message: "successfully fetch users",
        users,
      });
    } catch (error) {
      console.log(`❌ failed to fetch users!`);
      return next(new APIError("failed to fetch users", 500));
    }
  }

  public static async registerUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { email, name } = req.body;
      const user = new userModel({ email, name });
      await user.save();

      return res.status(201).json({
        message: "successfully register user",
      });
    } catch (error) {
      console.log(`❌ failed to register user!`);
      return next(new APIError("failed to register user", 500));
    }
  }
}
