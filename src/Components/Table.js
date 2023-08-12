import "../CSS/Table.css"

export default function Table({tableData, padding, tableClass, sliceStart = 0, sliceEnd = 10}){
    return (
        <>
        <table className={tableClass}>
            <thead>
                <tr>
                    {
                        tableData.tableHeaders.map((tableHeader, index) => {
                            return <th className={padding} key={index}>{tableHeader}</th> 
                        })
                    }
                    
                </tr>
            </thead>
            <tbody>
                {
                    
                    tableData.tableRows.slice(sliceStart, sliceEnd).map((tableRow, index) => {
                        return <tr key={index}>
                            {
                                tableRow.map((tableItem, index) => {
                                   return <td className={padding} key={index} >{tableItem}</td>
                                })
                            }
                            
                        </tr>
                    })
                    
                }
            </tbody>
        </table>
        </>
    )
}