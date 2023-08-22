// type UnitType = "g" | "ml" | "pcs";

enum UnitType {
  GRAM = "g",
  MILLILITER = "ml",
  PIECE = "pcs",
}

interface IIngredient {
  id: number;
  name: string;
  amount: number;
  unit: UnitType;
}

interface IRecipe {
  id: number;
  name: string;
  ingredients: IIngredient[];
}

const ingredient: IIngredient = {
  id: 1,
  name: "Flour",
  amount: 500,
  unit: UnitType.MILLILITER,
};
