import "./App.css";
import Recipe from "./components/Recipe";
import ForceButton from "./components/ForceButton";
import { IRecipe } from "./data/recipes";
import { recipe1 } from "./data/recipes";
import { useState } from "react";
import { createContext } from "react";

export const RecipeContext = createContext<IRecipe>(recipe1);
export const RecipeUpdateContext = createContext<any>(null);

function App() {
  const [currentRecipe, updateCurrentRecipe] = useState<IRecipe>(recipe1);
  console.log("recipe:" + currentRecipe.ingredients[0].name);

  function handleForceButtonClick() {
    //this.forceUpdate();
    console.log("ran");
  }
  return (
    <>
      <RecipeContext.Provider value={currentRecipe}>
        <RecipeUpdateContext.Provider value={updateCurrentRecipe}>
          <ForceButton onForceButtonClick={() => handleForceButtonClick()} />
          <Recipe
            id={currentRecipe.id}
            name={currentRecipe.name}
            ingredients={currentRecipe.ingredients}
          />
        </RecipeUpdateContext.Provider>
      </RecipeContext.Provider>
    </>
  );
}

export default App;
