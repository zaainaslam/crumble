export default function SubButton({ isSubOpen, subMenuOpen }){

    return (
        <button className="subButton" onClick={subMenuOpen}>
            Substitute...
        </button>
    )
}