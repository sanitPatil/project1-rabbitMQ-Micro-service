import e, { type NextFunction, type Request, type Response } from "express";
import { APIError } from "./utils/APIError";
import taskRouter from "./router/taskRouter";

const app = e();

app.use(e.json());

//TASK ROUTER
app.use("/api/v1/task", taskRouter);
app.use((err: APIError, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 500;
  let message = "server Error";

  if (err instanceof APIError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  return res.status(statusCode).json({
    message,
  });
});
export default app;
