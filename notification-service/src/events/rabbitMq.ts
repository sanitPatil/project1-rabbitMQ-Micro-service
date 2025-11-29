import amqplib from "amqplib";

export async function rabbitConnect() {
  try {
    const connection = await amqplib.connect(process.env.RABBIT_MQ_CONNECT!);
    const channel = await connection.createChannel();
    console.log(`✅ rabbitMQ server connected successfully.`);
    return channel;
  } catch (error) {
    console.log(`❌ failed to connect rabbit MQ server!`);
    process.exit(1);
  }
}
