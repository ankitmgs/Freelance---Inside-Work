import React from "react";
import { Link } from "react-router-dom";
import  "../CSS/CourseList.css";

const CourseList = () => {
  return (
    <div className="crs-top-container container">

      <div>
        <div className="crs-title">
          <p>Courses</p>
        </div>
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="breadcrumb-element" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="breadcrumb-element" href="#">
                  Library
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="breadcrumb-element" href="#">
                  Data
                </a>
              </li>
            </ol>
          </nav>
        </div>
        <div className="d-flex justify-content-between">
          <div className="crs-list-search-top">
            <input className="crs-list-search" placeholder="Search" />
            <i class=" fas fa-thin fa-magnifying-glass magifing-icon" />
          </div>
          <div>
            <button className="btn btn-primary">
              <i class="fas fa-regular fa-memo"></i>Export
            </button>
            <button
              className=""
              style={{
                color: "#1DA1F2",
                borderRadius: "5px",
                padding: " 5px",
                border: "2px solid #1DA1F2",
                backgroundColor: "#F6F6FF",
                margin: "0 1rem 0 1rem",
              }}
            >
              <i class="fa-solid fa-plus mx-1"></i>New Courses
            </button>
          </div>
        </div>
        <div>
          <table>
            <tr>
              <th className="crs-table-th d-flex" style={{width: "6rem"}}>
                <input type="checkbox" className="mx-3" />
                <p>#</p>
              </th>
              <th className="crs-table-th" style={{ width: "20rem" }}>
                <center>
                  <p>Courses</p>
                </center>
              </th>
              <th className="crs-table-th">
                <center>
                  <p>Visibility</p>
                </center>
              </th>
              <th className="crs-table-th">
                <center>
                  <p>Category</p>
                </center>
              </th>
              <th className="crs-table-th">
                <center>
                  <p>Upload Date</p>
                </center>
              </th>
              <th className="crs-table-th">
                <center>
                  <p>Regular Price</p>
                </center>
              </th>
              <th className="crs-table-th">
                <center>
                  <p>Sale Price</p>
                </center>
              </th>
              <th className="crs-table-th">
                <center>
                  <p>Student Review</p>
                </center>
              </th>
              <th className="crs-table-th">
                <center>
                  <p>Action</p>
                </center>
              </th>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="mx-3" /> 1
              </td>
              <td className="py-2 crs-table-td">
                <div className="d-flex">
                  <img
                    style={{
                      width: "100px",
                      height: "65px",
                      borderRadius: "2px",
                      marginRight: "0.5rem",
                    }}
                    src="https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737__480.jpg"
                    alt=""
                  />
                  <div>
                    <p className="mb-0">
                      Business English Course for ESL Students
                    </p>
                    <Link className=" mt-0 d-flex flex-column" to="courseReport">
                      View Report
                    </Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-eye d-flex flex-row align-items-center" style={{ color: "#39B44A" }} />
                  <select className="px-2" style={{ border: "none" }}>
                    <option>Public</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-center">
                  IT and Software
                </div>
              </td>
              <td>
                <div className="d-flex flex-column">
                  <center>
                    <p className="m-0">Aug 12, 2022</p>
                    <span style={{ color: "gray" }}>Published</span>
                  </center>
                </div>
              </td>
              <td>
                <center>
                  <p>Rs. 1249.00</p>
                </center>
              </td>
              <td>
                <center>
                  <p>Rs. 899.00</p>
                </center>
              </td>
              <td>
                <center>
                  <p style={{ color: "#1DA1F2", fontWeight: "bold" }}>
                    21 Feedbacks
                  </p>
                </center>
              </td>
              <td>
                <div className="d-flex justify-content-around">
                  <i class="fa-solid fa-pencil" style={{ cursor: "pointer" }} />
                  <i class="fa-solid fa-trash" style={{ cursor: "pointer" }} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="mx-3" /> 1
              </td>
              <td className="py-2">
                <div className="d-flex">
                  <img
                    style={{
                      width: "100px",
                      height: "65px",
                      borderRadius: "2px",
                      marginRight: "0.5rem",
                    }}
                    src="https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737__480.jpg"
                    alt=""
                  />
                  <div>
                    <p className="mb-0">
                      Business English Course for ESL Students
                    </p>
                    <Link className=" mt-0 d-flex flex-column" to="courseReport">
                      View Report
                    </Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-eye d-flex flex-row align-items-center" style={{ color: "#39B44A" }} />
                  <select className="px-2" style={{ border: "none" }}>
                    <option>Public</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-center">
                  IT and Software
                </div>
              </td>
              <td>
                <div className="d-flex flex-column">
                  <center>
                    <p className="m-0">Aug 12, 2022</p>
                    <span style={{ color: "gray" }}>Published</span>
                  </center>
                </div>
              </td>
              <td>
                <center>
                  <p>Rs. 1249.00</p>
                </center>
              </td>
              <td>
                <center>
                  <p>Rs. 899.00</p>
                </center>
              </td>
              <td>
                <center>
                  <p style={{ color: "#1DA1F2", fontWeight: "bold" }}>
                    21 Feedbacks
                  </p>
                </center>
              </td>
              <td>
                <div className="d-flex justify-content-around">
                  <i class="fa-solid fa-pencil" style={{ cursor: "pointer" }} />
                  <i class="fa-solid fa-trash" style={{ cursor: "pointer" }} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="mx-3" /> 1
              </td>
              <td className="py-2">
                <div className="d-flex">
                  <img
                    style={{
                      width: "100px",
                      height: "65px",
                      borderRadius: "2px",
                      marginRight: "0.5rem",
                    }}
                    src="https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737__480.jpg"
                    alt=""
                  />
                  <div>
                    <p className="mb-0">
                      Business English Course for ESL Students
                    </p>
                    <Link className=" mt-0 d-flex flex-column" to="courseReport">
                      View Report
                    </Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-eye d-flex flex-row align-items-center" style={{ color: "#39B44A" }} />
                  <select className="px-2" style={{ border: "none" }}>
                    <option>Public</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-center">
                  IT and Software
                </div>
              </td>
              <td>
                <div className="d-flex flex-column">
                  <center>
                    <p className="m-0">Aug 12, 2022</p>
                    <span style={{ color: "gray" }}>Published</span>
                  </center>
                </div>
              </td>
              <td>
                <center>
                  <p>Rs. 1249.00</p>
                </center>
              </td>
              <td>
                <center>
                  <p>Rs. 899.00</p>
                </center>
              </td>
              <td>
                <center>
                  <p style={{ color: "#1DA1F2", fontWeight: "bold" }}>
                    21 Feedbacks
                  </p>
                </center>
              </td>
              <td>
                <div className="d-flex justify-content-around">
                  <i class="fa-solid fa-pencil" style={{ cursor: "pointer" }} />
                  <i class="fa-solid fa-trash" style={{ cursor: "pointer" }} />
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
