import "../css/SubMenu.css";
import { categoriesList } from "../data/recipes";
import { IIngredientList } from "../data/recipes";
import { IIngredient } from "../data/recipes";
import { masterIngList } from "../data/recipes";

interface SubMenuProps {
  id: string;
  name: string;
  desc: string;
  calories: number;
  amount: number;
  unit: string;
}

function SubMenu({ id, name, desc, calories, amount, unit }: SubMenuProps) {
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

  function findIngredient(id: string, ingList: IIngredientList[]) {
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

  let categoryOfIng = determineCategory(id);
  console.log(categoryOfIng);

  return (
    <menu className="SubMenu">
      <ul>Calories: {calories}</ul>
      <ul>{categoryOfIng.name}</ul>
      <button>
        {findIngredient(categoryOfIng.ingredients[0].id, masterIngList).name} (
        {amount * categoryOfIng.ingredients[0].ratio})
      </button>
      <button>
        {findIngredient(categoryOfIng.ingredients[1].id, masterIngList).name} (
        {amount * categoryOfIng.ingredients[1].ratio})
      </button>
    </menu>
  );
}

export default SubMenu;
