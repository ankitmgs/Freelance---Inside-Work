import ActiveUserStats from "../Components/ActiveUserStats";
import Table from "../Components/Table";
import TotalBox from "../Components/TotalBox";
import UserInTable from "../Components/UserInTable";
import "../CSS/TotalBox.css"
import "../CSS/CourseReport.css"
import "../CSS/App.css"
import UserRating from "../Components/UserRating";

export default function CourseReport(){
    const courseReportTableData = {
        tableHeaders: ["ID", "Customer Name", "Date and Time", "Price", "Payment Method"],
        tableRows: [
            ["#1547162354", <UserInTable userName="Name" id={1} />, "May 10, 2022 , 12:43 PM", "RS.1548.000", "Debit Card"],
            ["#1547162354", <UserInTable userName="Name" id={1} />, "May 10, 2022 , 12:43 PM", "RS.1548.000", "Debit Card"],
            ["#1547162354", <UserInTable userName="Name" id={1} />, "May 10, 2022 , 12:43 PM", "RS.1548.000", "Debit Card"],
            ["#1547162354", <UserInTable userName="Name" id={1} />, "May 10, 2022 , 12:43 PM", "RS.1548.000", "Debit Card"],
            ["#1547162354", <UserInTable userName="Name" id={1} />, "May 10, 2022 , 12:43 PM", "RS.1548.000", "Debit Card"],
            ["#1547162354", <UserInTable userName="Name" id={1} />, "May 10, 2022 , 12:43 PM", "RS.1548.000", "Debit Card"]
        ]
    }
    const userRatings = [
        {
            name: "Alex Supun",
            date: "29 Aug 2022",
            rating: 4.6,
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "Alex Supun",
            date: "29 Aug 2022",
            rating: 3,
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "Alex Supun",
            date: "29 Aug 2022",
            rating: 4.6,
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "Alex Supun",
            date: "29 Aug 2022",
            rating: 4.6,
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ]
    return (
        <section className="courseReportSection">
            <div className="whiteCourseReportTotalBox1">
                <TotalBox backGround="whiteBackGround" color="black" text="Purchases"/>
            </div>
            <div className="whiteCourseReportTotalBox2">
                <TotalBox backGround="whiteBackGround" color="black" text="Ratings"/>
            </div>
            <div className="salesReports">
                <ActiveUserStats text="Sales Report" />
            </div>
            <div className="recentPurchases">
                <h3>Recent Purchases</h3>
                <Table tableData={courseReportTableData} padding="courseReportPadding" />
            </div>
            <div className="recentFeedback">
                <h3>Recent Feedback</h3>
                {
                    userRatings.slice(0, 2).map((userRating, index) => {
                        return (
                            <div key={index}>
                                <UserRating userRating = {userRating} />
                            </div>
                        )
                    })
                }
                <p className="viewCourseReport">View Report</p>
            </div>
        </section>
    )
}