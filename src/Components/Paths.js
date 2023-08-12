import { Link } from "react-router-dom";
import "../CSS/App.css"
import logo from "../images/LOGO.png"
import bannerMenu from "../images/BannerMenu.PNG"
import notificationMenu from "../images/NotificationMenu.PNG"
import competetionMenu from "../images/CompetetionMenu.PNG"
import coursesMenu from "../images/CoursesMenu.PNG"
import currentAffairs from "../images/CurrentAffairs.PNG"
import dashboardIcon from "../images/DashboardIcon.PNG"
import logoutMenu from "../images/LogoutMenu.PNG"
import questionAndAnswer from "../images/QuestionAndAnswer.PNG"
import reportsMenu from "../images/ReportsMenu.PNG"
import rolesMenu from "../images/RolesMenu.PNG"
import settingsMenu from "../images/SettingsMenu.PNG"
import testsMenu from "../images/TestsMenu.PNG"
import userIconMenu from "../images/userIconMenu.PNG"
import userRequestsMenu from "../images/UserRequestMenu.PNG"



export default function Paths(){
    
    return (
        <section className="paths">
            <img width="100px" className="dashboardLogo" src={logo} />
            <nav>
                <ul>
                    <li className="menuListItems" ><img className="menuIcons" src={dashboardIcon}/><Link style={{ textDecoration: 'none', color: "#D2D2D2" }} to="/dashboard">Dashboard</Link></li>

                    <li className="menuListItems" ><img className="menuIcons" src={userIconMenu}/><Link style={{ textDecoration: 'none', color: "#D2D2D2" }} to="/users">Users</Link></li>

                    <li className="menuListItems" ><img className="menuIcons" src={rolesMenu}/><Link style={{ textDecoration: 'none', color: "#D2D2D2" }} to="/roles">Roles</Link></li>

                    <li className="menuListItems" ><img className="menuIcons" src={reportsMenu}/><Link style={{ textDecoration: 'none', color: "#D2D2D2" }} to="/reports">Reports</Link></li>

                    <li className="menuListItems" ><img className="menuIcons" src={coursesMenu}/><Link style={{ textDecoration: 'none', color: "#D2D2D2" }} to="/courses">Courses</Link></li>

                    <li className="menuListItems" ><img className="menuIcons" src={testsMenu}/><Link style={{ textDecoration: 'none', color: "#D2D2D2" }} to="/tests">Tests</Link></li>

                    <li className="menuListItems" ><img className="menuIcons" src={questionAndAnswer}/><Link style={{ textDecoration: 'none', color: "#D2D2D2" }} to="/questionAndAnswers">Question & Answer</Link></li>

                    <li className="menuListItems" ><img className="menuIcons" src={notificationMenu}/><Link style={{ textDecoration: 'none', color: "#D2D2D2" }} to="/pushNotifications">Push Notification</Link></li>

                    <li className="menuListItems" ><img className="menuIcons" src={currentAffairs}/><Link style={{ textDecoration: 'none', color: "#D2D2D2" }} to="/currentAffairs">Current Affairs & Daily News</Link></li>

                    <li className="menuListItems" ><img className="menuIcons" src={bannerMenu}/><Link style={{ textDecoration: 'none', color: "#D2D2D2" }} to="/banner">Banner</Link></li>

                    <li className="menuListItems" ><img className="menuIcons" src={competetionMenu}/><Link style={{ textDecoration: 'none', color: "#D2D2D2" }} to="/competition">Competition</Link></li>

                    <li className="menuListItems" ><img className="menuIcons" src={userRequestsMenu}/><Link style={{ textDecoration: 'none', color: "#D2D2D2" }} to="/userRequest">User Request</Link></li>

                    <li className="menuListItems" ><img className="menuIcons" src={settingsMenu}/><Link style={{ textDecoration: 'none', color: "#D2D2D2" }} to="/settings">Settings</Link></li>

                    <li className="menuListItems" ><img className="menuIcons" src={logoutMenu}/><Link style={{ textDecoration: 'none', color: "#D2D2D2" }} to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </section>
    )
}