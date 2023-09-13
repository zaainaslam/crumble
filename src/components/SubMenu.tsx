import "../css/SubMenu.css";
import { categoriesList } from "../data/recipes";
import { ICategory } from "../data/recipes";

interface SubMenuProps {
  id: string;
  name: string;
  desc: string;
  calories: number;
  amount: number;
  unit: string;
}

function SubMenu({ id, name, desc, calories, amount, unit }: SubMenuProps) {
  function determineCategory(id: string): ICategory {
    for (let category of categoriesList) {
      for (let ingredient of category.ingredients) {
        if (id === ingredient.id) {
          return category;
        }
      }
    }
    return categoriesList[0];
  }

  let categoryOfIng = determineCategory(id);
  console.log(categoryOfIng);

  return (
    <menu className="SubMenu">
      <ul>Calories: {calories}</ul>
      <ul>{categoryOfIng.name}</ul>
      <button>{categoryOfIng.ingredients[0].id}</button>
      <button>{categoryOfIng.ingredients[1].id}</button>
    </menu>
  );
}

export default SubMenu;
