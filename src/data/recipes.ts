// type UnitType = "g" | "ml" | "pcs";

export enum UnitType {
  GRAM = "g",
  MILLILITER = "ml",
  PIECE = "pcs",
}


export interface IIngredient {
  id: number;
  name: string;
  amount: number;
  unit: UnitType;
}





export interface IRecipe {
  id: number;
  name: string;
  ingredients: IIngredient[];
}


export const ingredient: IIngredient = {
  id: 1,
  name: "Flour",
  amount: 500,
  unit: UnitType.GRAM,
};

export const pumpkinPie: IRecipe = {
  id: 1,
  name: "Pumpkin Pie",
  ingredients: [ingredient]

}




