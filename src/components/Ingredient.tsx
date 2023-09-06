import "../data/recipes";
import SubButton from "./SubButton";
import { useState } from "react";

function Ingredient({ id, name, amount, unit }: IIngredient) {
  const [menuOpen, setMenuOpen] = useState({ boolean: false });

  function handleMenuClick(isOpen: boolean) {
    if (isOpen === true) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  if (menuOpen === false) {
    return (
      <div>
        {name}, {amount}
        {unit}{" "}
        <SubButton
          value="substitute..."
          onMenuClick={() => handleMenuClick(true)}
        />
      </div>
    );
  } else {
    <div>
      {name}, {amount}
      {unit}{" "}
      <SubButton value="menu open" onMenuClick={() => handleMenuClick(false)} />
    </div>;
  }
}

export default Ingredient;
