import "../css/GenericButton.css";

interface subMenuProps {
  value: string;
  onMenuClick: (arg: any) => any;
}

function GenericButton({ value, onMenuClick }: subMenuProps) {
  return (
    <div>
      <button className="GenericButton" onClick={onMenuClick}>
        {value}
      </button>
    </div>
  );
}

export default GenericButton;
