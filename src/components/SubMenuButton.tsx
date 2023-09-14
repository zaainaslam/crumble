interface SubMenuButtonProps {
  name: string;
  amount: number;
  onSubMenuButtonClick: any;
}

function SubMenuButton({
  name,
  amount,
  onSubMenuButtonClick,
}: SubMenuButtonProps) {
  return (
    <button onClick={onSubMenuButtonClick}>
      {name} ({amount})
    </button>
  );
}

export default SubMenuButton;
