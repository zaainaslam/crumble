import Ingredient from "./Ingredient";

import recipes from "../database/recipes.json";

export default function Recipe({ recipeName }) {
  //   const ings = [];

  //   for (let i = 0; i < recipes[recipeName].ingredients.length; i++) {
  //     /* for (let j = 0; j < 6; j++) {
  //             //todo
  //         } */

  //     ings.push(
  //       <Ingredient
  //         ingName={recipes[recipeName].ingredients[i].name}
  //         ingAmount={recipes[recipeName].ingredients[i].amount}
  //         ingUnit={recipes[recipeName].ingredients[i].unit}
  //       />
  //     );
  //   }

  const ingredients = [];

  recipes[recipeName].ingredients.forEach((ingredient) => {
    if (ingredient.name) {
      ingredients.push(
        <Ingredient
          ingName={ingredient.name}
          ingAmount={ingredient.amount}
          ingUnit={ingredient.unit}
        />
      );
    }
  });

  return <div>{ingredients}</div>;
}
