import "../css/SubButton.css";

interface subMenuProps {
  value: string;
  onMenuClick: any;
}

function SubButton({ value, onMenuClick }: subMenuProps) {
  return (
    <div className="SubButton">
      <button onClick={onMenuClick}>{value} </button>
    </div>
  );
}

export default SubButton;
