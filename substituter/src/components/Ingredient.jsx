import SubButton from "./SubButton";
import SubIngList from "./SubIngList";
import useState from "react";

export default function Ingredient({ ingName, ingAmount, ingUnit }) {
  //const [currentIng, setCurrentIng] = useState("");

  function subMenuHandle() {
    console.log("weiner");
  }

  return (
    <>
      <div className="ingredient">
        _{ingName}_ {ingAmount} {ingUnit} {"-->"}
        <SubButton subMenuOpen={subMenuHandle} />
        <SubIngList ingName={ingName} />
      </div>
    </>
  );
}
