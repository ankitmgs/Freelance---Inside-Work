import { useState } from "react";
import "../CSS/ActiveUsers.css"

export default function ActiveUserStats({text}){
    const [screeningReports14, setScreeningReports14] = useState([50, 25, 30, 46, 24, 56, 67, 32, 26, 45, 24, 12, 65, 76])
    const [screeningReports30, setScreeningReports30] = useState([50, 25, 30, 46, 24, 56, 67, 32, 26, 46, 23, 56, 67, 54, 50, 25, 30, 46, 24, 56, 67, 32, 26, 46, 23, 56, 67, 54, 34, 20])
    const [screeningReports1, setScreeningReports1] = useState([50, 25, 30, 46, 24, 56, 67, 32, 26, 46, 23, 56])
    const [selectedValue, setSelectedValue] = useState("option1");

    const handleRadioChange = event => {
        setSelectedValue(event.target.value);
    };
    return (
        <>
            <div className="activeUsersSection">
                <div className="activeUsersHead">
                <p className="activeUsers">{text}</p>
                <div className="activeUsersInput">
                <input
                type="radio" value="option1" checked={selectedValue === "option1"} onChange=        {handleRadioChange} />
                Last 14 days
                <input type="radio" value="option2" checked={selectedValue === "option2"} onChange=     {handleRadioChange}
                />
                Last month
                <input type="radio" value="option3" checked={selectedValue === "option3"} onChange=     {handleRadioChange}
                />
                Last Year
                </div>
                </div>
                <div className="activeUsersBars">
                {
                    selectedValue === "option1" && screeningReports14.map((screeningReport, index) => {
                        return <div key={index} className="maxh" style={{ height: `${screeningReport}px`, width: '10px', backgroundColor: 'blue', margin: '0' }} />
                    })
                }
                {
                    selectedValue === "option2" && screeningReports30.map((screeningReport, index) => {
                        return <div key={index} className="maxh" style={{ height: `${screeningReport}px`, width: '10px', backgroundColor: 'blue', margin: '0' }} />
                    })
                }
                {
                    selectedValue === "option3" && screeningReports1.map((screeningReport, index) => {
                        return <div key={index} className="maxh" style={{ height: `${screeningReport % 100}px`, width: '10px', backgroundColor: 'blue', margin: '0' }} />
                    })
                }
                </div>
            </div>
            
        </>
    )
}