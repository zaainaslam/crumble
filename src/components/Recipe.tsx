//import React from "react";
import "../data/recipes";
import "../css/Recipe.css";
import Ingredient from "./Ingredient.tsx";
import { IRecipe } from "../data/recipes";
import { useState } from "react";

function Recipe({ id, name, ingredients }: IRecipe) {
  const [oldCalories, updateCals] = useState(calcCalories());

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

  function calcCalories() {
    let totalCals: number = 0;
    for (let ingredient of ingredients) {
      totalCals += ingredient.calories * ingredient.amount!;
    }
    return totalCals;
  }

  function CalculateNewCalories() {
    updateCals(calcCalories);
  }

  const newCalories: number = calcCalories();

  return (
    <div className="Recipe">
      <h3>{name}</h3>
      {oldCalories === newCalories && <h4>{oldCalories}kcal</h4>}
      {oldCalories !== newCalories && (
        <h4>
          {oldCalories}kcal --{">"}{" "}
          {oldCalories < newCalories && (
            <div style={{ color: "darkred" }}>{newCalories}kcal</div>
          )}
          {oldCalories >= newCalories && (
            <div style={{ color: "green" }}>{newCalories}kcal</div>
          )}
        </h4>
      )}
      {ingredients.map((ingredient) => (
        <Ingredient
          id={ingredient.id}
          name={ingredient.name}
          desc={ingredient.desc}
          calories={ingredient.calories}
          amount={ingredient.amount!}
          unit={ingredient.unit!}
          ingNo={1}
          handleCals={() => CalculateNewCalories()}
        />
      ))}
    </div>
  );
}

export default Recipe;
