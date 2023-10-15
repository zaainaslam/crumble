import "../css/SubButton.css";

interface subMenuProps {
  value: string;
  onMenuClick: () => void;
}

function SubButton({ value, onMenuClick }: subMenuProps) {
  return (
    <div>
      <button className="SubButton" onClick={onMenuClick}>
        {value}{" "}
      </button>
    </div>
  );
}

export default SubButton;
