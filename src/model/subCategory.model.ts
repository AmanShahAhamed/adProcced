import mongoose, { Schema, Types, model, Document } from "mongoose";

export interface ISubCategory extends Document {
  name: string;
}

export const subCategorySchema = new Schema<ISubCategory>({
  name: { type: String, required: true },
});

const SubCategoryModel =
  (mongoose.models.SubCategory as mongoose.Model<ISubCategory>) ||
  model<ISubCategory>("SubCategory", subCategorySchema);

export default SubCategoryModel;
