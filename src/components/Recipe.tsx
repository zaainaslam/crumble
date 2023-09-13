//import React from "react";
import "../data/recipes";
import "../css/Recipe.css";
import Ingredient from "./Ingredient.tsx";
import { IRecipe } from "../data/recipes";

function Recipe({ id, name, ingredients }: IRecipe) {
  // var ings = [];

  // for (let i = 0; i < ingredients.length; i++) {
  //   ings.push(
  //     <Ingredient
  //       ingName={ingredients[i].name}
  //       ingAmount={ingredients[i].amount}
  //       ingUnit={ingredients[i].unit}
  //     />
  //   );
  // }

  return (
    <div className="Recipe">
      {name}
      <Ingredient
        id={ingredients[0].id}
        name={ingredients[0].name}
        amount={ingredients[0].amount}
        unit={ingredients[0].unit}
      />
      <Ingredient
        id={ingredients[1].id}
        name={ingredients[1].name}
        amount={ingredients[1].amount}
        unit={ingredients[1].unit}
      />
      <Ingredient
        id={ingredients[2].id}
        name={ingredients[2].name}
        amount={ingredients[2].amount}
        unit={ingredients[2].unit}
      />
      <Ingredient
        id={ingredients[3].id}
        name={ingredients[3].name}
        amount={ingredients[3].amount}
        unit={ingredients[3].unit}
      />
      <Ingredient
        id={ingredients[4].id}
        name={ingredients[4].name}
        amount={ingredients[4].amount}
        unit={ingredients[4].unit}
      />
    </div>
  );
}

export default Recipe;
