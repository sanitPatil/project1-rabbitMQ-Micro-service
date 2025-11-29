import "dotenv/config";
import e from "express";
import { taskCreatedConsumed } from "./events/taskCreatedConsumed";
import chalk from "chalk";

const app = e();

taskCreatedConsumed().catch((error) =>
  console.log(chalk.bgRedBright(`failed to consumed`))
);
export default app;
