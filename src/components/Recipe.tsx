//import React from "react";
import "../data/recipes";
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
