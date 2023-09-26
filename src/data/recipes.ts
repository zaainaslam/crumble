import recipes from "./recipes.json"
import ingredients from "./ingredients.json"
import categories from "./categories.json"

// type UnitType = "g" | "ml" | "pcs";



export enum UnitType {
  GRAM = "g",
  CUP = " cup",
  PIECE = " pcs",
}

function getUnit(unit: string) {
  switch (unit){
    case "cup":
      return UnitType.CUP;
      break;
    case "gram":
      return UnitType.GRAM;
      break;
    case "piece":
      return UnitType.PIECE;
      break;

  }
}

export interface ICategory {
  id :string,
  name: string,
  default: string,
  ingredients: {id:string, ratio: number}[]
}

export interface IIngredientList {
  id: string;
  name: string;
  desc: string;
  calories: number;
}


export interface IIngredient {
  id: string;
  name: string;
  desc: string,
  calories: number,
  amount: number;
  unit: UnitType;
}





export interface IRecipe {
  id: number;
  name: string;
  ingredients: IIngredient[];
}



export var masterIngList: IIngredientList[] = [];



for (let i = 0; i < ingredients.length; i++) {


  let masterIngArray: IIngredientList = {
    id: ingredients[i].id,
    name: ingredients[i].name,
    desc: ingredients[i].desc,
    calories: ingredients[i].calories
  };

  masterIngList.push(masterIngArray);

}


let ingList: IIngredient[] = [];

for (let i = 0; i < recipes.pumpkinPie.ingredients.length; i++) {

  for(let ing of masterIngList){


    if (ing.id ===  recipes.pumpkinPie.ingredients[i].id) {


    let ingArray: IIngredient = {
  
      id: ing.id,
      name: ing.name,
      desc: ing.desc,
      calories: ing.calories,
      amount: recipes.pumpkinPie.ingredients[i].amount,
      unit: getUnit(recipes.pumpkinPie.ingredients[i].unit)!
    };

    console.log(true);

    ingList.push(ingArray);

  }

}
}

export const recipe1: IRecipe = {
  id: 1,
  name: recipes.pumpkinPie.name,
  ingredients: ingList

}

export const recipe2: IRecipe = {
  id: 2,
  name: recipes.herb.name,
  ingredients: ingList

}

//categories
export var categoriesList : ICategory[] = [];

for (let i = 0; i < categories.length; i++) {


  let masterIngArray: ICategory = {
    id: categories[i].id,
    name: categories[i].name,
    default: categories[i].default,
    ingredients: categories[i].ingredients
  };

  categoriesList.push(masterIngArray);

}




