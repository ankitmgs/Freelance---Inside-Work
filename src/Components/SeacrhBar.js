import { useState } from "react"
import searchIcon from "../images/searchIcon.png"
import "../CSS/Header.css"

export default function SeacrhBar(){
    const [search, setSearch] = useState("")
    function handleSubmit(e){

    }
    return (
        <>
            <form className="searchBarForm" onSubmit={handleSubmit}>
                <input className="searchBarInput" type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search" />
                <input className="searchBarIcon" width="18px" height="18px" type="image" src={searchIcon} border="0" alt="Submit" />
            </form>
        </>
    )
}