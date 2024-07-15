import dbConnect from "../../../lib/dbConnect";
import CountryModel from "../../../model/country.model";

export const GET = async (_req: Request) => {
  await dbConnect();
  try {
    const country = await CountryModel.find().populate("states");
    return Response.json(
      {
        success: true,
        country,
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
