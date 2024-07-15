import mongoose, { Schema, Document } from "mongoose";

export interface IState extends Document {
  name: string;
}

export const stateSchema = new Schema<IState>({
  name: { type: String, required: true },
});

const StateModel =
  (mongoose.models.State as mongoose.Model<IState>) ||
  mongoose.model<IState>("State", stateSchema);

export default StateModel;
