//import React from "react";
import "../data/recipes";
import Ingredient from "./Ingredient.tsx";
import { pumpkinPie } from "../data/recipes";

function Recipe({ id, name, ingredients }: IRecipe) {
  return (
    <div>
      {name}
      <Ingredient
        id={ingredients[0].id}
        name={ingredients[0].name}
        amount={ingredients[0].amount}
        unit={ingredients[0].unit}
      />
    </div>
  );
}

export default Recipe;
