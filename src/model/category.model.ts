import mongoose, { Schema, model, Document } from "mongoose";
import { ISubCategory, subCategorySchema } from "./subCategory.model";

interface ICategory extends Document {
  name: string;
  subCategory: ISubCategory[];
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  subCategory: [subCategorySchema],
});

const CategoryModel =
  (mongoose.models.Category as mongoose.Model<ICategory>) ||
  mongoose.model<ICategory>("Category", categorySchema);

export default CategoryModel;
