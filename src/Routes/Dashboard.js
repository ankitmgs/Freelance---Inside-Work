import { useState } from "react";
import ActiveUserStats from "../Components/ActiveUserStats";
import PieChart from "../Components/PieChart";
import Table from "../Components/Table";
import TotalBox from "../Components/TotalBox";
import UserInTable from "../Components/UserInTable";
import "../CSS/Dashboard.css"

export default function DashBoard(){
    const tableData = {
        tableHeaders: ["Order ID", "User Name", "Retained", "Type", "Amount"],
        tableRows: [
            ["12341233", <UserInTable userName="Name" id={1} />, "May 10, 2022 , 12:43 PM", "Course Pur.", "Card"],
            ["12341233", <UserInTable userName="Name" id={1} />, "May 10, 2022 , 12:43 PM", "Course Pur.", "Card"],
            ["12341233", <UserInTable userName="Name" id={1} />, "May 10, 2022 , 12:43 PM", "Course Pur.", "Card"],
            ["12341233", <UserInTable userName="Name" id={1} />, "May 10, 2022 , 12:43 PM", "Course Pur.", "Card"],
            ["12341233", <UserInTable userName="Name" id={1} />, "May 10, 2022 , 12:43 PM", "Course Pur.", "Card"],
            ["12341233", <UserInTable userName="Name" id={1} />, "May 10, 2022 , 12:43 PM", "Course Pur.", "Card"],
        ]
    }
    const [dashboardTableData, setDashboardTableData] = useState(tableData)

    const [ pieChartArray, setPieChartArray ] = useState([[10, 20, 30, 15, 10, 15], ["Competition", "Course", "Cv Prep.", "Project Prep.", "Question and Answer"]])
    return (
        <section className="dashboard">
           
            <div className="blackDashboardTotalBox"><TotalBox backGround="blackBackGround" color="white" text="Revenues" /></div>

            <div className="whiteDashboardTotalBox"><TotalBox backGround="whiteBackGround" color="black" text="Users" /></div>

            <div className="dashboardActiveUsers"><ActiveUserStats text="Active Users" /></div>

            <div className="dashboardTableSection">
                <h3>Recent Sellings</h3>
                <Table tableData={dashboardTableData} padding="dashboardPadding" />
            </div>
            
            <div className="whiteDashboardTotalBoxSecond"><TotalBox backGround="whiteBackGround" color="black" /></div>

            <div className="dashboardPieChart"><PieChart pieChartArray={pieChartArray} /></div>
        </section>
    )
}