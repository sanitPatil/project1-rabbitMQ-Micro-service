import chalk from "chalk";
import { rabbitConnect } from "./rabbitMq";

export async function taskCreatedConsumed() {
  const channel = await rabbitConnect();
  
  if (!channel) return;
  console.log(`⏰ waiting for notification...`);
  await channel.assertQueue(process.env.TASK_QUEUE!, { durable: false });
  channel.consume(process.env.TASK_QUEUE!, (message) => {
    if (message) {
      const data = JSON.parse(message.content.toString());
      console.log("\n" + chalk.green("🔔 New Task Notification!"));
      console.log(chalk.yellow("-----------------------------------"));
      console.log(chalk.white(`🆔 Task ID: ${data.id}`));
      console.log(chalk.white(`📌 Title: ${data.title}`));
      console.log(chalk.white(`📝 Description: ${data.description}`));
      console.log(chalk.yellow("-----------------------------------\n"));
      channel.ack(message);
    }
  });
}
