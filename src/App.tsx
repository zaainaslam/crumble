import "./App.css";
import Recipe from "./components/Recipe";
import { pumpkinPie } from "./data/recipes";

function App() {
  return (
    <>
      <Recipe
        id={pumpkinPie.id}
        name={pumpkinPie.name}
        ingredients={pumpkinPie.ingredients}
      />
    </>
  );
}

export default App;
