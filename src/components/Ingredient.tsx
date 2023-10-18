import { IIngredient, UnitType } from "../data/recipes";
import GenericButton from "./GenericButton";
import SubMenu from "./SubMenu";
import "../css/Ingredient.css";
import { RecipeUpdateContext, RecipeContext, RerenderContext } from "../App";
import { useState, useContext } from "react";

interface IngredientProps {
  id: string;
  name: string;
  desc: string;
  calories: number;
  amount: number;
  unit: UnitType;
  ingNo: number;
  handleCals: () => number;
}

function Ingredient({
  id,
  name,
  desc,
  calories,
  amount,
  unit,
  ingNo,
  handleCals,
}: IngredientProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [buttonContents, setButtonContents] = useState<string>("swap out");

  const [ingChoice, setIngChoice] = useState<IIngredient>({
    id,
    name,
    desc,
    calories,
    amount,
    unit,
  });

  //const recipeUpdater = useContext(RecipeUpdateContext);
  const recipeUpdated = useContext(RecipeContext);
  const triggerRerender = useContext(RerenderContext);

  const returnContents: [] = [];

  function handleMenuClick() {
    setMenuOpen(!menuOpen);

    if (menuOpen) {
      setButtonContents("swap out");
      let newRecipe = recipeUpdated;

      newRecipe.ingredients[ingNo] = ingChoice;

      handleCals();

      triggerRerender();

      console.log(recipeUpdated.ingredients[ingNo]);
    } else {
      setButtonContents("I'm happy");
    }

    console.log(menuOpen);
  }

  returnContents.push();

  if (!menuOpen) {
    return (
      <div className="Ingredient">
        {ingChoice.name}, {ingChoice.amount}
        {ingChoice.unit}{" "}
        <GenericButton
          value={buttonContents}
          onMenuClick={() => handleMenuClick()}
        />
      </div>
    );
  } else {
    return (
      <div className="Ingredient">
        {ingChoice.name}, {ingChoice.amount}
        {ingChoice.unit}{" "}
        <SubMenu
          ingNo={ingNo}
          id={ingChoice.id}
          name={ingChoice.name}
          desc={ingChoice.desc}
          calories={ingChoice.calories}
          amount={ingChoice.amount!}
          unit={ingChoice.unit!}
          updateIng={setIngChoice}
        />
        <GenericButton
          value={buttonContents}
          onMenuClick={() => handleMenuClick()}
        />
      </div>
    );
  }
}

export default Ingredient;
