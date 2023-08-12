import {
  Delete,
  StarHalfRounded,
  StarRounded,
  Visibility,
} from "@mui/icons-material";
import React from "react";

const CourseRatingCard = (props) => {
  return (
    <div>
      <div className="card mb-3">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="card-top d-flex mr-2">
              <img
                className="course-card-avatar"
                src={props.img}
                alt="course-avtar-img"
              />
              <div>
                <p className="avatar-name mb-0">{props.name}</p>
                <p className="mt-0">{props.date}</p>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="course-card-rating ms-auto ">
              <div className="course-card-top-reverse d-flex flex-row-reverse">
                <p className="course-card-top-rating-text mt-2">4.6 Rating</p>
                <StarHalfRounded className="mt-2" color="warning" />
                <StarRounded className="mt-2" color="warning" />
                <StarRounded className="mt-2" color="warning" />
                <StarRounded className="mt-2" color="warning" />
                <StarRounded className="mt-2" color="warning" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="course-card-des container mx-2">{props.desc}</p>
        </div>
        <div className="mx-4 d-flex flex-row-reverse">
          <div className="card-bottom-row">
            <Visibility />
            <Delete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRatingCard;
