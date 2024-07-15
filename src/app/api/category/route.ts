import CategoryModel from "@/model/category.model";
import dbConnect from "../../../lib/dbConnect";

export const GET = async (_req: Request) => {
  await dbConnect();
  try {
    const category = await CategoryModel.find().populate("subCategory");
    return Response.json(
      {
        success: true,
        category,
        message: "Data fetched successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        success: false,
        message: "Internal server error..",
      },
      { status: 501 }
    );
  }
};
