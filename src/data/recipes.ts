import "./recipes.json"

// type UnitType = "g" | "ml" | "pcs";



export enum UnitType {
  GRAM = "g",
  MILLILITER = "ml",
  PIECE = "pcs",
}

export interface IIngredientList {
  id: number;
  name: string;
  category: string;
  ratio: number;
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

export const whiteFlour: IIngredientList = {
  id: 1,
  name: "White Flour",
  category: "flour",
  ratio: 1
};


export const blackFlour: IIngredientList = {
  id: 1,
  name: "Black Flour",
  category: "flour",
  ratio: 0.5
};


export const ingredient1: IIngredient = {
  id: 1,
  name: "White Flour",
  amount: 500,
  unit: UnitType.GRAM,
};


export const pumpkinPie: IRecipe = {
  id: 1,
  name: "Pumpkin Pie",
  ingredients: [ingredient1]

}

for (let i = 0; i <)




