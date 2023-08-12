import mathPlus from "../images/math-plus.png"
import "../CSS/Button.css"

export default function AddButton({buttonText}){
    return (
        <div className="button whiteBackground">
            <img src={mathPlus}/>
            <span>Add {buttonText}</span>
        </div>
    )
}