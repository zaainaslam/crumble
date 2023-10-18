import "../css/SubMenu.css";
import { categoriesList } from "../data/recipes";
import { UnitType } from "../data/recipes";
import { IIngredient, IRecipe, ICategory } from "../data/recipes";
import { masterIngList } from "../data/recipes";
import SubMenuButton from "./SubMenuButton";
import { RecipeContext, RerenderContext, RecipeUpdateContext } from "../App";

import { useState, createContext, useContext } from "react";
import GenericButton from "./GenericButton";

interface SubMenuProps {
  id: string;
  name: string;
  desc: string;
  calories: number;
  amount: number;
  unit: UnitType;
  ingNo: number;
  updateIng: (value: IIngredient) => any;
}

function SubMenu({
  id,
  name,
  desc,
  calories,
  amount,
  unit,
  ingNo,
  updateIng,
}: SubMenuProps) {
  const triggerRerender = useContext(RerenderContext);
  const recipeUpdated = useContext(RecipeContext);
  const recipeUpdater = useContext(RecipeUpdateContext);
  const currentIng = "";

  type RecipeIngsMapType = {
    [id: string]: IIngredient;
  };

  /* const [recipeIngsMap, recipeIngsMapUpdate] = useState<RecipeIngsMapType>({});

  function mapRecipeIngs(){
    for (let ingredient in recipeUpdated.ingredients) {

    }
  } */

  function findMenuButtonValue(ingId: string, masterIngList: IIngredient[]) {
    let matchedIng: IIngredient = findIngredientInList(ingId, masterIngList)!;
    let amountOfIng: number =
      (getRatio(matchedIng.id)! / getRatio(id)!) * amount;

    return (
      matchedIng.name +
      " (" +
      amountOfIng +
      unit +
      ") (" +
      matchedIng.calories * amountOfIng +
      "kcal)"
    );
  }

  function handleSubMenuButtonClick(idNew: string) {
    console.log("submenu clicked");

    let newRecipe: IRecipe = JSON.parse(JSON.stringify(recipeUpdated));

    //console.log(newRecipe.ingredients[0]);

    newRecipe.ingredients[ingNo] = replaceIngredient(idNew, masterIngList)!;
    //newRecipe.ingredients[0] = newRecipe.ingredients[3];
    //console.log(newRecipe.ingredients[0]);

    updateIng(newRecipe.ingredients[ingNo]);
    recipeUpdater(newRecipe);
    //triggerRerender();
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

  function findIngredientInList(id: string, ingList: IIngredient[]) {
    for (let i = 0; i < ingList.length; i++) {
      for (let ing of ingList) {
        if (id === ing.id) {
          let matchedIng: IIngredient = {
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

  function getRatio(id: string) {
    let category: ICategory = determineCategory(id);
    for (let i = 0; i < category.ingredients.length; i++) {
      if (category.ingredients[i].id === id) {
        return category.ingredients[i].ratio;
      }
    }
  }

  function replaceIngredient(idNew: string, ingList: IIngredient[]) {
    for (let i = 0; i < ingList.length; i++) {
      for (let ing of ingList) {
        if (idNew === ing.id) {
          let matchedIng: IIngredient = {
            id: ing.id,
            name: ing.name,
            desc: ing.desc,
            calories: ing.calories,
            amount: (getRatio(idNew)! / getRatio(id)!) * amount,
            unit: unit,
          };

          console.log("math: " + getRatio(idNew)! / getRatio(id)!);

          return matchedIng;
        }
      }
    }
  }

  let categoryOfIng = determineCategory(id);
  console.log(categoryOfIng);

  return (
    <menu className="SubMenu">
      <br />
      calories: {calories}/{unit.replace(/\s/g, "")}
      <br />
      other {categoryOfIng.name}s:
      <br />
      <div>
        {categoryOfIng.ingredients.map((ingredient) => (
          <GenericButton
            value={findMenuButtonValue(ingredient.id, masterIngList)}
            onMenuClick={() =>
              handleSubMenuButtonClick(
                findIngredientInList(ingredient.id, masterIngList)!.id
              )
            }
          />
        ))}
        <br />
      </div>
    </menu>
  );
}

export default SubMenu;
