import AddButton from "../Components/AddButton"
import ExportButton from "../Components/ExportButton"
import SeacrhBar from "../Components/SeacrhBar"
import "../CSS/App.css"
import "../CSS/RolesAndSimilarComponents.css"
import Table from "../Components/Table"
import EditDeleteIcons from "../Components/EditDeleteIcons"
import { Link } from "react-router-dom"
import Paging from "../Components/Paging"
import { useEffect, useState } from "react"


export default function Roles(){
    const [sliceStart, setSliceStart] = useState(0)
    const [sliceEnd, setSliceEnd] = useState(10)
    const [start, setStart] = useState(1)
    const [end, setEnd] = useState(1)
    const rolesTableData = {
        tableHeaders: ["#", "Role Name", "Slug", "Description", "Assigned User", "Action"],
        tableRows : [
            ["1", "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["2",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />], 
            ["3",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["4", "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["5",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />], 
            ["6",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["7", "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["8",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />], 
            ["9",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["10", "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["11", "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["12",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />], 
            ["13",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["14", "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["15",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />], 
            ["16",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["17", "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["18",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />], 
            ["19",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["20", "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["21", "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["22",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />], 
            ["23",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["24", "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />],
            ["25",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />], 
            ["26",  "Admin", "IT and Software", "IT and Software IT and Software IT and Software", "Rs. 1249.00", <EditDeleteIcons />]
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
        setEnd(Math.ceil(rolesTableData.tableRows.length / 10))
    }, [])
    return (
        <section className="rolesSection">
            <div className="rolesSearchBar">
                <SeacrhBar />
            </div>
            <div className="rolesExportButton">
                <ExportButton />
            </div>
            
            <div className="rolesAddButton">
                <Link style={{ textDecoration: 'none'}} to="/createRole"><AddButton buttonText="Roles" /></Link>
            </div>
            <div className="rolesTable">
                <Table tableData={rolesTableData} padding="dashboardPadding" sliceStart={sliceStart} sliceEnd={sliceEnd} />
            </div>
            <div className="usersPaging">
            <Paging start={start} end={end} forward={forward} backward={backward} />
            </div>
        </section>
    )
}