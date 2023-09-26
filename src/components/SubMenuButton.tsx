import { RerenderContext } from "../App";
import { useContext } from "react";
import "../css/SubMenubutton.css";

interface SubMenuButtonProps {
  name: string;
  amount: number;
  calories: number;
  unit: string;
  onSubMenuButtonClick: any;
}

function SubMenuButton({
  name,
  amount,
  calories,
  unit,
  onSubMenuButtonClick,
}: SubMenuButtonProps) {
  return (
    <button className="SubMenuButton" onClick={onSubMenuButtonClick}>
      {name} ({amount}
      {unit}) ({calories * amount}kcal)
    </button>
  );
}

export default SubMenuButton;
