import ingredients from "../database/ingredients.json";

export default function SubIngList({ ingName }) {
  console.log("here");

  const ingredient = ingredients[ingName];

  if (ingredient) {
    return <div>{ingredient.category}</div>;
  } else {
    return <div>no ingredient found</div>;
  }
}
