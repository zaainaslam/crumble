import { IIngredient } from "../data/recipes";
import SubButton from "./SubButton";
import { useState } from "react";

function Ingredient({ id, name, amount, unit }: IIngredient) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [buttonContents, setButtonContents] = useState<string>("open");

  const returnContents: [] = [];

  function handleMenuClick() {
    setMenuOpen(!menuOpen);

    if (menuOpen) {
      setButtonContents("open");
    } else {
      setButtonContents("closed");
    }

    console.log(menuOpen);
  }

  returnContents.push();

  return (
    <div>
      {name}, {amount}
      {unit}{" "}
      <SubButton value={buttonContents} onMenuClick={() => handleMenuClick()} />
    </div>
  );
}

export default Ingredient;
