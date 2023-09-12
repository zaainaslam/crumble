import recipes from "./recipes.json"

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




let ingList: IIngredient[] = [];

for (let i = 0; i < recipes.pumpkinPie.ingredients.length; i++) {


  let ingArray: IIngredient = {
    id: i,
    name: recipes.pumpkinPie.ingredients[i].name,
    amount: recipes.pumpkinPie.ingredients[i].amount,
    unit: UnitType.GRAM
  };

  ingList.push(ingArray);

}

export const recipe1: IRecipe = {
  id: 1,
  name: recipes.pumpkinPie.name,
  ingredients: ingList

}




