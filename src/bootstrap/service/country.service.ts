import CountryModel from "../../model/country.model";
import StateModel from "../../model/state.model";
import { COUNTRY } from "../data/country.constant";

export const countryService = async () => {
  try {
    const count = await CountryModel.countDocuments();
    if (count > 0) return;
    const promise = [];
    for (let key in COUNTRY) {
      if (COUNTRY[key].length) {
        promise.push(
          StateModel.insertMany(
            COUNTRY[key].map((state) => ({
              name: state,
            }))
          ).then((states) => {
            const country = new CountryModel({ name: key, states });
            country.save();
          })
        );
      } else {
        const country = new CountryModel({ name: key });
        promise.push(country.save());
      }
    }
    await Promise.all(promise);
  } catch (err) {
    console.error(err);
  }
};
