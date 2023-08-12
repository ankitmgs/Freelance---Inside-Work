import exportIcon from "../images/export.png"
import "../CSS/Button.css"

export default function ExportButton(){
    return (
        <div className="button blueBackground">
            <img src={exportIcon}/>
            <span>Export</span>
        </div>
    )
}