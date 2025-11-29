import mongoose, { Schema, Document } from "mongoose";

interface ITask extends Document {
  title: string;
  description: string;
  userId: string;
}

const TaskSchema: Schema<ITask> = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const taskModel = mongoose.model<ITask>("task", TaskSchema);
