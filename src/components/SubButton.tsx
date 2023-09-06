interface subMenuProps {
  value: string;
  onMenuClick: any;
}

function SubButton({ value, onMenuClick }: subMenuProps) {
  return (
    <div>
      <button onClick={onMenuClick}>{value} </button>
    </div>
  );
}

export default SubButton;
