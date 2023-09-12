import "./App.css";
import Recipe from "./components/Recipe";
import { recipe1 } from "./data/recipes";

function App() {
  return (
    <>
      <Recipe
        id={recipe1.id}
        name={recipe1.name}
        ingredients={recipe1.ingredients}
      />
    </>
  );
}

export default App;
