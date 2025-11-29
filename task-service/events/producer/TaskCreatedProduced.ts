import { rabbitConnect } from "../rabbitMQ";

export async function taskCreatedProducer(task: {
  id: string;
  description: string;
  title: string;
}) {
  const channel = await rabbitConnect();
  if (!channel) return;

  const routingKey = process.env.TASK_CREATED_ROUTING_KEY!;
  const exchange = process.env.EXCHANGE!;
  const queue = process.env.TASK_QUEUE!;

  await channel.assertExchange(exchange, "direct", {
    durable: false,
  });
  await channel.assertQueue(queue, { durable: false });

  await channel.bindQueue(queue, exchange, routingKey);

  channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(task)));

  console.log(`🔔 Notification send Successfully`);
}
