import refreshIcon from "../images/refreshIcon.png"
import userIcon from "../images/userIcon.png"
import bellIcon from "../images/bellIcon.png"
export default function UserNameSection(){
    return (
        <>
            <img src={refreshIcon} alt="" />
            <img className="userIcon" src={userIcon} alt="" />
            <p>Username</p>
            <img src={bellIcon} alt="" />
        </>
    )
}