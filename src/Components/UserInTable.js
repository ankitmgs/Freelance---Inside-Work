import userIconMenu from "../images/userIconMenu.PNG"

export default function UserInTable({userName, id, hasDate}){
    return (
        <div className="userInTable">
            <img className="userInTableLogo" src={userIconMenu}/>
            <div className="userInTableInfo">
                <p>{userName}</p>
                <p>{hasDate ? id: `Id: ${id}` }</p>
            </div>
        </div>
    )
}