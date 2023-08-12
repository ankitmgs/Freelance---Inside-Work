import {
  Delete,
  StarHalfRounded,
  StarRounded,
  Visibility,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/CourseRating.css";
import CourseRatingCard from "../Props/CourseRatingCard";

const CourseRating = () => {
  return (
    <div className="container">
      <h2 className="course-title">Courses</h2>
      <div className="course-bread">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink className="bread-text" to="#">
              Dashboard
            </NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink className="bread-text" to="#">
              Academy
            </NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink className="bread-text" to="#">
              Courses
            </NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Rating
          </li>
        </ol>
        <div className="rating-number d-flex">
          <h3 style={{ fontWeight: "bold" }}>4.6</h3>
          <div className="" style={{ marginLeft: "1rem" }}>
            <StarRounded fontSize="large" color="warning" />
            <StarRounded fontSize="large" color="warning" />
            <StarRounded fontSize="large" color="warning" />
            <StarRounded fontSize="large" color="warning" />
            <StarHalfRounded fontSize="large" color="warning" />
          </div>
        </div>
        <p className="star-bottom-text">Based on 12 review</p>
        <CourseRatingCard
          img="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          name="Alex Supun"
          date="29 Aug 2022"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus senectus eleifend amet suspendisse nunc. Est vel ultrices posuere in sodales pulvinar tristique justo."
        />
        <CourseRatingCard
          img="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          name="Alex Supun"
          date="29 Aug 2022"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus senectus eleifend amet suspendisse nunc. Est vel ultrices posuere in sodales pulvinar tristique justo."
        />
        <CourseRatingCard
          img="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          name="Alex Supun"
          date="29 Aug 2022"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus senectus eleifend amet suspendisse nunc. Est vel ultrices posuere in sodales pulvinar tristique justo."
        />
        <div className="row-per-page d-flex my-3">
          <div className="d-flex justify-content-start">
            <p className="">Rows per page</p>
            <select name="row" className="course-button">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="">
            <button className=" course-next-btn">Next</button>
            <button className="course-next-btn">Prev</button>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div>
    //     <h3 className="crs-title-txt">Courses</h3>
    //     <br />
    //   </div>
    //   <div className="crd-pagination">
    //     <span className="m-1">Dashboard/ </span>
    //     <span className="m-1">Academy/ </span>
    //     <span className="m-1">Courses/ </span>
    //     <span className="m-1">Rating/ </span>
    //   </div>
    // </div>
  );
};

export default CourseRating;
