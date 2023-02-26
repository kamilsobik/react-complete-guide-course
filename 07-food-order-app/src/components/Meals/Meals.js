import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailibleMeals from "./AvailibleMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailibleMeals />
    </Fragment>
  );
};

export default Meals;
