import "./App.css";
import Recipe from "./components/Recipe";
import { IRecipe } from "./data/recipes";
import { recipe1 } from "./data/recipes";
import { useState } from "react";

function App() {
  const [currentRecipe, updateCurrentRecipe] = useState<IRecipe>(recipe1);
  return (
    <>
      <Recipe
        id={currentRecipe.id}
        name={currentRecipe.name}
        ingredients={currentRecipe.ingredients}
      />
    </>
  );
}

export default App;
