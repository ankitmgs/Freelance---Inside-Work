import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import AddButton from "../Components/AddButton"
import EditDeleteIcons from "../Components/EditDeleteIcons"
import ExportButton from "../Components/ExportButton"
import Paging from "../Components/Paging"
import SeacrhBar from "../Components/SeacrhBar"
import Status from "../Components/Status"
import Table from "../Components/Table"
import UserInTable from "../Components/UserInTable"
import "../CSS/App.css"
import "../CSS/RolesAndSimilarComponents.css"

export default function Users(){
    const [sliceStart, setSliceStart] = useState(0)
    const [sliceEnd, setSliceEnd] = useState(10)
    const [start, setStart] = useState(1)
    const [end, setEnd] = useState(1)
    const usersTableData = {
        tableHeaders: ["#", "User Name", "Email Address", "Phone number", "User Role", "Created Date", "Update Date", "Status", "Action"],
        tableRows : [
            ["1", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />],
            ["2", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />], 
            ["3", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="INACTIVE" colorClass="INACTIVE" />, <EditDeleteIcons />],
            ["4", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />],
            ["5", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />], 
            ["6", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="INACTIVE" colorClass="INACTIVE" />, <EditDeleteIcons />],
            ["7", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />],
            ["8", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />], 
            ["9", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="INACTIVE" colorClass="INACTIVE" />, <EditDeleteIcons />],
            ["10", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />],
            ["11", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />], 
            ["12", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="INACTIVE" colorClass="INACTIVE" />, <EditDeleteIcons />],
            ["13", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />],
            ["14", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />], 
            ["15", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="INACTIVE" colorClass="INACTIVE" />, <EditDeleteIcons />],
            ["16", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />],
            ["17", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />], 
            ["18", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="INACTIVE" colorClass="INACTIVE" />, <EditDeleteIcons />],
            ["19", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="INACTIVE" colorClass="INACTIVE" />, <EditDeleteIcons />],
            ["20", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />],
            ["21", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />], 
            ["22", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="INACTIVE" colorClass="INACTIVE" />, <EditDeleteIcons />],
            ["23", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />],
            ["24", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />], 
            ["25", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="INACTIVE" colorClass="INACTIVE" />, <EditDeleteIcons />],
            ["26", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />],
            ["27", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />], 
            ["28", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="INACTIVE" colorClass="INACTIVE" />, <EditDeleteIcons />],
            ["29", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="INACTIVE" colorClass="INACTIVE" />, <EditDeleteIcons />],
            ["30", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />],
            ["31", <UserInTable userName="Joel Muniz" id={212311} />, "Joelmuniz12@email.com", "+91-7645-980-010", "Admin", "May 10, 2022 , 12:43 PM", "May 10, 2022 , 12:43 PM", <Status text="ACTIVE" colorClass="ACTIVE" />, <EditDeleteIcons />]
        ]
    }

    function forward(){
        setStart(prev => prev + 1)
        setSliceStart(prev => prev + 10)
        setSliceEnd(prev => prev + 10)
    }

    function backward(){
        setStart(prev => prev - 1)
        setSliceStart(prev => prev - 10)
        setSliceEnd(prev => prev - 10)
    }

    useEffect(() => {
        setEnd(Math.ceil(usersTableData.tableRows.length / 10))
    }, [])
    
    return (
        <section className="usersSection">
            <div className="usersSearchBar">
                <SeacrhBar />
            </div>
            <div className="usersExportButton">
                <ExportButton />
            </div>
            
            <div className="usersAddButton">
                <Link style={{ textDecoration: 'none'}} to="/createUser"><AddButton buttonText="User" /></Link>
            </div>
            <div className="usersTable">
                <Table tableData={usersTableData} tableClass="usersTableWidth" padding="usersPadding" sliceStart={sliceStart} sliceEnd={sliceEnd} />
            </div>
            <div className="usersPaging">
            <Paging start={start} end={end} forward={forward} backward={backward} />
            </div>
        </section>
    )
}