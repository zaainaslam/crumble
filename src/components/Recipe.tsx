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
      totalCals += ingredient.calories * ingredient.amount;
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
      <Ingredient
        id={ingredients[0].id}
        name={ingredients[0].name}
        desc={ingredients[0].desc}
        calories={ingredients[0].calories}
        amount={ingredients[0].amount}
        unit={ingredients[0].unit}
        ingNo={0}
        handleCals={() => CalculateNewCalories()}
      />
      <Ingredient
        id={ingredients[1].id}
        name={ingredients[1].name}
        desc={ingredients[1].desc}
        calories={ingredients[1].calories}
        amount={ingredients[1].amount}
        unit={ingredients[1].unit}
        ingNo={1}
        handleCals={() => CalculateNewCalories()}
      />
      <Ingredient
        id={ingredients[2].id}
        name={ingredients[2].name}
        desc={ingredients[2].desc}
        calories={ingredients[2].calories}
        amount={ingredients[2].amount}
        unit={ingredients[2].unit}
        ingNo={2}
        handleCals={() => CalculateNewCalories()}
      />
      <Ingredient
        id={ingredients[3].id}
        name={ingredients[3].name}
        desc={ingredients[3].desc}
        calories={ingredients[3].calories}
        amount={ingredients[3].amount}
        unit={ingredients[3].unit}
        ingNo={3}
        handleCals={() => CalculateNewCalories()}
      />
      <Ingredient
        id={ingredients[4].id}
        name={ingredients[4].name}
        desc={ingredients[4].desc}
        calories={ingredients[4].calories}
        amount={ingredients[4].amount}
        unit={ingredients[4].unit}
        ingNo={4}
        handleCals={() => CalculateNewCalories()}
      />
    </div>
  );
}

export default Recipe;
