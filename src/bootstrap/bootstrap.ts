import { categoryService } from "./service/category.service";
import { countryService } from "./service/country.service";

export const bootstrap = () => {
  console.log("bootstrapping data......");
  countryService();
  categoryService();
  console.log("bootstrap finished...");
};
