import { UnitType } from "../data/recipes";
import SubButton from "./SubButton";
import SubMenu from "./SubMenu";
import "../css/Ingredient.css";
import { useState } from "react";

interface IngredientProps {
  id: string;
  name: string;
  desc: string;
  calories: number;
  amount: number;
  unit: UnitType;
  ingNo: number;
}

function Ingredient({
  id,
  name,
  desc,
  calories,
  amount,
  unit,
  ingNo,
}: IngredientProps) {
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

  if (!menuOpen) {
    return (
      <div className="Ingredient">
        {name}, {amount}
        {unit}{" "}
        <SubButton
          value={buttonContents}
          onMenuClick={() => handleMenuClick()}
        />
      </div>
    );
  } else {
    return (
      <div className="Ingredient">
        {name}, {amount}
        {unit}{" "}
        <SubButton
          value={buttonContents}
          onMenuClick={() => handleMenuClick()}
        />
        <SubMenu
          ingNo={ingNo}
          id={id}
          name={name}
          desc={desc}
          calories={calories}
          amount={amount}
          unit={unit}
        />
      </div>
    );
  }
}

export default Ingredient;
