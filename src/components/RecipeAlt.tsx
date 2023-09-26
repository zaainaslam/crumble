//import React from "react";
import "../data/recipes";
import "../css/Recipe.css";
import Ingredient from "./Ingredient.tsx";
import { IRecipe } from "../data/recipes";

function Recipe({ id, name, ingredients }: IRecipe) {
  let ings: any[] = [];

  ings.push(
    <div className="Recipe">
    {name}
    );

  for (let i = 0; i < ingredients.length; i++) {
    ings.push(
      <Ingredient
        id={ingredients[0].id}
        name={ingredients[0].name}
        amount={ingredients[0].amount}
        unit={ingredients[0].unit}
      />
    );
  }

  ings.push(</div>);

  return ings;
}

export default Recipe;
