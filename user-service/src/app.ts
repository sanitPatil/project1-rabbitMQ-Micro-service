import "dotenv/config";
import e, { type NextFunction, type Request, type Response } from "express";
import userRouter from "./router/router";
import APIError from "./utils/APIError";

const app = e();

app.use(e.json());
// user router
app.use("/api/v1/user", userRouter);

app.use((err: APIError, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 500;
  let message = "server error";

  if (err instanceof APIError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  return res.status(statusCode).json({
    message,
  });
});
export default app;
