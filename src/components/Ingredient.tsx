import "../data/recipes";

function Ingredient({ id, name, amount, unit }: IIngredient) {
  return (
    <div>
      {name}, {amount} {unit}
    </div>
  );
}

export default Ingredient;
