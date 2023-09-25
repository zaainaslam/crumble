import "../css/SubMenu.css";
import { categoriesList } from "../data/recipes";
import { IIngredientList, UnitType } from "../data/recipes";
import { IIngredient, IRecipe } from "../data/recipes";
import { masterIngList } from "../data/recipes";
import SubMenuButton from "./SubMenuButton";
import { RecipeContext, RecipeUpdateContext } from "../App";

import { useState, createContext, useContext } from "react";

interface SubMenuProps {
  id: string;
  name: string;
  desc: string;
  calories: number;
  amount: number;
  unit: string;
}

function SubMenu({ id, name, desc, calories, amount, unit }: SubMenuProps) {
  const recipeUpdated = useContext(RecipeContext);
  const recipeUpdater = useContext(RecipeUpdateContext);

  function handleSubMenuButtonClick(id: string) {
    console.log("submenu clicked");

    let newRecipe: IRecipe = recipeUpdated;

    //console.log(newRecipe.ingredients[0]);

    newRecipe.ingredients[0] = replaceIngredient(id, masterIngList)!;
    //newRecipe.ingredients[0] = newRecipe.ingredients[3];
    console.log(newRecipe.ingredients[0]);
    recipeUpdater(newRecipe);
    //console.log(recipeUpdated.ingredients[0]);
  }

  function determineCategory(id: string) {
    for (let category of categoriesList) {
      for (let ingredient of category.ingredients) {
        if (id === ingredient.id) {
          return category;
        }
      }
    }
    return categoriesList[0];
  }

  function findIngredientInList(id: string, ingList: IIngredientList[]) {
    for (let i = 0; i < ingList.length; i++) {
      for (let ing of ingList) {
        if (id === ing.id) {
          let matchedIng: IIngredientList = {
            id: ing.id,
            name: ing.name,
            desc: ing.desc,
            calories: ing.calories,
          };

          console.log(true);

          return matchedIng;
        }
      }
    }
  }

  function replaceIngredient(id: string, ingList: IIngredientList[]) {
    for (let i = 0; i < ingList.length; i++) {
      for (let ing of ingList) {
        if (id === ing.id) {
          let matchedIng: IIngredient = {
            id: ing.id,
            name: ing.name,
            desc: ing.desc,
            calories: ing.calories,
            amount: 777,
            unit: UnitType.GRAM,
          };

          console.log("matched" + matchedIng.name);

          return matchedIng;
        }
      }
    }
  }

  let categoryOfIng = determineCategory(id);
  console.log(categoryOfIng);

  return (
    <menu className="SubMenu">
      <ul>Calories: {calories}</ul>
      <ul>{categoryOfIng.name}</ul>
      <SubMenuButton
        name={
          findIngredientInList(categoryOfIng.ingredients[0].id, masterIngList)
            .name
        }
        amount={amount * categoryOfIng.ingredients[0].ratio}
        onSubMenuButtonClick={() =>
          handleSubMenuButtonClick(
            findIngredientInList(categoryOfIng.ingredients[0].id, masterIngList)
              .id
          )
        }
      />
      <SubMenuButton
        name={
          findIngredientInList(categoryOfIng.ingredients[1].id, masterIngList)
            .name
        }
        amount={amount * categoryOfIng.ingredients[1].ratio}
        onSubMenuButtonClick={() =>
          handleSubMenuButtonClick(
            findIngredientInList(categoryOfIng.ingredients[1].id, masterIngList)
              .id
          )
        }
      />
    </menu>
  );
}

export default SubMenu;
