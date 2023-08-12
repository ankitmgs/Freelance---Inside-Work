import editIcon from "../images/EditIcon.PNG"
import deleteIcon from "../images/DeleteIcon.PNG"
import "../CSS/EditDeleteIcon.css"

export default function EditDeleteIcons(){
    return (
        <div className="editDeleteIcon">
            <img width="15px" src={editIcon} />
            <img width="15px" src={deleteIcon} />
        </div>
    )
}