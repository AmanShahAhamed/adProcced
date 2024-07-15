import mongoose, { Schema, model, Document } from "mongoose";
import { IState, stateSchema } from "./state.model";

interface ICountry extends Document {
  name: string;
  states: IState[];
}

const countrySchema = new Schema<ICountry>({
  name: { type: String, required: true },
  states: [stateSchema],
});

const CountryModel =
  (mongoose.models.Country as mongoose.Model<ICountry>) ||
  model<ICountry>("Country", countrySchema);

export default CountryModel;
