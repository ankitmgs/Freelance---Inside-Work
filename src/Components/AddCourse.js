import { act } from "@testing-library/react";
import React, { useRef, useState } from "react";
import "../CSS/AddCourse.css";


const AddCourse = () => {
  const [step, setStep] = useState(1);
  // const [filename, setFilename] = useState("No file selected");
  const [completedSteps, setCompletedSteps] = useState([
    false,
    false,
    false,
    false,
  ]);

  const actualBtnRef = useRef(null);
  const [fileName, setFileName] = useState("No file chosen");

  const stepLabels = ["Course Information", "Curriculum", "Pricing", "Messages"];

  const handleNext = () => {
    setCompletedSteps((prevCompletedSteps) => {
      return [
        ...prevCompletedSteps.slice(0, step - 1),
        true,
        ...prevCompletedSteps.slice(step),
      ];
    });
    setStep(step + 1);
  };

  const handlePrev = () => {
    setCompletedSteps((prevCompletedSteps) => {
      return [
        ...prevCompletedSteps.slice(0, step - 2),
        false,
        ...prevCompletedSteps.slice(step - 1),
      ];
    });
    setStep(step - 1);
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-3"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-center",
            gap: "24rem",
          }}
        >
          <ProgressBar
            completedSteps={completedSteps}
            stepLabels={stepLabels}
          />

          <div>
            <button className="crs-cancel-btn mx-2">Cancel</button>
            <button className="crs-done-btn">Done</button>
          </div>
        </div>
        <div className="col-md-9">
          <FormStep
            actualBtnRef={actualBtnRef}
          fileName={fileName}
          setFileName={setFileName}
            step={step}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ completedSteps, stepLabels }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <div
      style={{ backgroundColor: "skyblue", width: "20px", height: "100%" }}
    />
    <div style={{ display: "flex" }}>
      <div>
        {completedSteps.map((completed, index) => (
          <div
            key={index}
            style={{
              backgroundColor: completed ? "#1DA1F2" : "white",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              marginRight: "10px",
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid black",
            }}
          >
            {completed ? <i class="fas fa-light fa-check" style={{color: "white"}}></i> : ""}
          </div>
        ))}
      </div>
      <div>
        {stepLabels.map((label, index) => {
          return (
            <div key={index} style={{ marginRight: "10px", marginTop: "16px" }}>
              <div>{label}</div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const FormStep = ({
  step,
  handleNext,
  handlePrev,
  
}) => {
  
  

  switch (step) {
    case 1:
      return (
        <Step1
          handleNext={handleNext}
        />
      );
    case 2:
      return <Step2 handleNext={handleNext} handlePrev={handlePrev} />;
    case 3:
      return <Step3 handleNext={handleNext} handlePrev={handlePrev} />;
    case 4:
      return <Step4 handlePrev={handlePrev} />;
    default:
      return <Step1 handleNext={handleNext} />;
  }
};

const Step1 = ({ handleNext}) => {

  const[selectedFile,setSelectedFile] = useState([])
  const [isSelected , setIsSelected] = useState(false)
  const[selectedFile2,setSelectedFile2] = useState([])
  const [isSelected2 , setIsSelected2] = useState(false)
  const [fileName, setFileName] = useState("No file chosen");
  const [fileName2, setFileName2] = useState("No file chosen");

  const changeHandler = (e)=>{
    setSelectedFile(e.target.files[0])
   setIsSelected(true)
    console.log("d",e.target.files[0])
  }
  const changeHandler2 = (e)=>{
    setSelectedFile2(e.target.files[0])
   setIsSelected2(true)
    console.log("2",e.target.files[0])
  }
  console.log("djkhbhjsg",selectedFile.name)
  return <div>
  <div className="d-flex justify-content-between">
    <h4>Course Information</h4>
    <button className="crs-done-btn" onClick={handleNext}>
      Save & Next
    </button>
  </div>
  <div className="my-2 d-flex flex-column">
    <label>Course Title</label>
    <input className="crs-course-title" placeholder="Enter Course Title" />
  </div>
  <div className="my-2 d-flex flex-column">
    <label>Course category</label>
    <input className="crs-course-title" placeholder="Enter Course Title" />
  </div>
  <div className="my-2 d-flex flex-column">
    <label>Description</label>
    <textarea className="crs-course-des" placeholder="Enter Course Title" />
  </div>
  <div className="my-2 d-flex flex-column">
    <label>Requirements</label>
    <textarea className="crs-course-des" placeholder="Enter Course Title" />
  </div>
  <h6 className="my-4">Basic Information</h6>
  <div className="row">
    <div className="col-6">
      <div>
        <label>Language</label>
        <select className="course-select-input">
          <option value="">English</option>
          <option value="">Hindi</option>
          <option value="">Gujrati</option>
        </select>
      </div>
    </div>
    <div className="col-6">
      <div>
        <label>Level</label>
        <select className="course-select-input">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
    </div>
  </div>
  <h6 className="my-4">Thumnails and promo video</h6>
  <div className="row">
    <div className="col-md-6">
      <label>Thumnail image</label>
      <div className="crs-Thumnail">
        <img
          className="crs-Thumnail-image"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        />
      </div>
    </div>
    <div className="col-md-6 d-flex align-items-center">
      <div>

        <label>Upload your course image here.</label>
        <br />
        {isSelected === true ?<span style={{backgroundColor: "#F4F5F7", color: "black", padding: "8px"}} className="crs-upload-input-span">{selectedFile.name}</span >:<span style={{backgroundColor: "#F4F5F7", color: "black", padding: "8px"}}>{fileName}</span>}
        <input
          type="file"
          id="actual-btn"
          hidden
         
          onChange={changeHandler}
        />
        
        <label
          style={{ color: "white", backgroundColor: "#1da1f2", padding: "0.5rem 1rem 0.5rem 1rem ", borderRadius: "5px", marginLeft: "1rem" }}
          htmlFor="actual-btn"
        >
          Upload File
        </label>
       
        
      </div>
    </div>
  </div>
  <div className="row my-4">
    <div className="col-md-6">
      <label>Promo videos</label>
      <div className="crs-Thumnail">
        <img
          className="crs-Thumnail-image"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        />
      </div>
    </div>
    <div className="col-md-6 d-flex align-items-center">
      <div>
        <label>Upload your promotional video here.</label>
        <br />
        {isSelected2 === true ?<span style={{backgroundColor: "#F4F5F7", color: "black", padding: "8px"}} className="crs-upload-input-span">{selectedFile2.name}</span >:<span style={{backgroundColor: "#F4F5F7", color: "black", padding: "8px"}}>{fileName2}</span>}
        <input
          type="file"
          id="actual-btn2"
          hidden
         
          onChange={changeHandler2}
        />
        
        <label
          style={{ color: "white", backgroundColor: "#1da1f2", padding: "0.5rem 1rem 0.5rem 1rem ", borderRadius: "5px",  marginLeft: "1rem" }}
          htmlFor="actual-btn2"
        >
          Upload File
        </label>
      </div>

    </div>
  </div>
</div>
  
};

const Step2 = ({ handleNext, handlePrev }) => (
  <div>
    <div className="d-flex justify-content-between mb-3">
      <h4>Curriculum</h4>
      <div>
        <button onClick={handlePrev} className="crs-cancel-btn py-1 mx-2">
          Back
        </button>
        <button onClick={handleNext} className="crs-done-btn py-1">
          Save & Next
        </button>
      </div>
    </div>
    <div className="crs-curr-top">
      <div className="d-flex">
        <p style={{ fontWeight: "bolder" }}>Section 1: </p>
        <p> Introduction</p>
        <i className="fas fa-light fa-pencil mx-2 mt-1" />
      </div>
      <div
        style={{
          margin: "5px",
          border: "1px solid gray",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <div className="d-flex">
          <p style={{ fontWeight: "bolder" }}>Lecture 1:</p>
          <p>Introduction Video.mp4</p>
        </div>
        <div>
          <button className="crs-curr-edit-btn mx-2">
            <i class="fas fa-light fa-pencil "></i>Edit
          </button>
          <button className="crs-curr-remove-btn">
            <i class="fas fa-thin fa-light fa-trash px-2"></i>Remove
          </button>
        </div>
      </div>
      <div>
        <button
          className="crs-cancel-btn"
          style={{
            width: "auto",
            padding: " 0 8px 0 8px",
            margin: "1rem 0 0.5rem 0",
          }}
        >
          <i class="fa-solid fa-plus"></i>Add Lecture
        </button>
      </div>
    </div>
    <div
      className=""
      style={{
        border: "1px solid gray",
        marginTop: "1rem",
        borderRadius: "10px",
      }}
    >
      <div className="d-flex" style={{ margin: "1rem" }}>
        <p style={{ fontWeight: "bolder" }}>New Section:</p>
        <input className="crs-new-title" placeholder="Enter a Title"></input>
      </div>
      <p style={{ marginLeft: "8rem" }}>Objective</p>
      <input
        className="crs-new-title"
        style={{ marginLeft: "8rem", width: "84%" }}
        placeholder="Enter a learning objective"
      ></input>
      <div className="d-flex justify-content-end my-3 mx-4">
        <button className="crs-cancel-btn">Cancel</button>
        <button className="crs-done-btn">Add Section</button>
      </div>
    </div>
  </div>
);

const Step3 = ({ handleNext, handlePrev }) => (
  <div>
    <div className="d-flex justify-content-between">
      <h4>Pricing</h4>
      <div>
        <button onClick={handlePrev} className="crs-cancel-btn py-1 mx-2">
          Back
        </button>
        <button onClick={handleNext} className="crs-done-btn py-1">
          Save & Next
        </button>
      </div>
    </div>
    <div className="mt-3">
      <p>Original price:</p>
      <div>
        <select className="pricing-sel">
          <option>USD</option>
          <option>Rupees</option>
          <option>Euro</option>
        </select>
        <input className="pricing-inp" placeholder="Enter the price" />
        <button className="pricing-save-btn">Save</button>
      </div>
    </div>
    <div className="mt-4">
      <p>Sale price:</p>
      <div>
        <select className="pricing-sel">
          <option>USD</option>
          <option>Rupees</option>
          <option>Euro</option>
        </select>
        <input className="pricing-inp" placeholder="Enter the price" />
        <button className="pricing-save-btn">Save</button>
      </div>
    </div>
  </div>
);

const Step4 = ({ handlePrev }) => (
  <div>
    <div className="d-flex justify-content-between">
      <h4>Pricing</h4>
      <div>
        <button onClick={handlePrev} className="crs-cancel-btn py-1 mx-2">
          Back
        </button>
        <button className="crs-done-btn py-1">Submit</button>
      </div>
    </div>
    <div>
      <p className="mt-4">
        Write messages to your students (Optional ) that will be sent
        authomatically when they join or complete your course to encouage
        students to engage with course content.If you do not wish to send a
        welcome or congratulations messages, leave the text box blank.
      </p>
      <p className="mt-4" style={{ fontWeight: "500" }}>
        Welcome Message
      </p>
      <textarea className="pricing-text-area" placeholder="Enter message" />
      <p style={{ fontWeight: "500" }}>Congratulation Message</p>
      <textarea className="pricing-text-area" placeholder="Enter message" />
    </div>
  </div>
);

export default AddCourse;
