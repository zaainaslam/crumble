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
    <button onClick={onSubMenuButtonClick}>
      {name} ({amount}
      {unit}) ({calories}kcal)
    </button>
  );
}

export default SubMenuButton;
