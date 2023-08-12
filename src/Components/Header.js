import SeacrhBar from "./SeacrhBar";
import UserNameSection from "./UserNameSection";
import "../CSS/Header.css"

export default function Header(){
    return (
        <header className="header">
            <section className="searchBar">
                <SeacrhBar />
            </section>
            <section className="userNameSection">
                <UserNameSection />
            </section>
            <h1 className="headerHeading">Dashboard</h1>
        </header>
    )
}