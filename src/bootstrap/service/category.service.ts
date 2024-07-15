import CategoryModel from "../../model/category.model";
import SubCategoryModel from "../../model/subCategory.model";
import { CATEGORY } from "../data/category.constant";

export const categoryService = async () => {
  try {
    const count = await CategoryModel.countDocuments();
    if (count > 0) return;
    const promise = [];
    for (let key in CATEGORY) {
      if (CATEGORY[key].length) {
        promise.push(
          SubCategoryModel.insertMany(
            CATEGORY[key].map((subCategory) => ({
              name: subCategory,
            }))
          ).then((subCategory) => {
            const category = new CategoryModel({ name: key, subCategory });
            category.save();
          })
        );
      } else {
        const category = new CategoryModel({ name: key });
        promise.push(category.save());
      }
    }
    await Promise.all(promise);
  } catch (error) {
    console.error(error);
  }
};
