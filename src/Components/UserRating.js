import UserInTable from "./UserInTable";
import {
    StarHalfRounded,
    StarRounded,
    StarOutline
  } from "@mui/icons-material";
import "../CSS/UserRating.css"

export default function UserRating({userRating}){
    return (
        <div className="userRatingDiv">
            <UserInTable userName={userRating.name} id={userRating.date} hasDate={true} />
            <div className="userRatings">
            <div className="ratingStars">
                {
                    [0, 1, 2, 3, 4].map((number, index) => {
                        return (
                            <div key={index}>
                                {userRating.rating - number >= 1 && <StarRounded color="warning" />}
                                {(userRating.rating - number > 0 && userRating.rating - number < 1) && <StarHalfRounded color="warning" />}
                                {userRating.rating - number <= 0 && <StarOutline color="warning" />}
                            </div> 
                        )
                    })
                }
            </div>
            <h6>{userRating.rating} rating</h6>
            </div>
            <p>{userRating.des}</p>
        </div>
    )
}