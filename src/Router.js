import { Route, Routes} from "react-router-dom";
import AddCourse from "./Components/AddCourse";
import CourseList from "./Components/CourseList";
import CourseRating from "./Components/CourseRating";
import CreateRole from "./Components/CreateRole";
import CourseReport from "./Routes/CourseReport";
import DashBoard from "./Routes/Dashboard";
import LoginPage from "./Routes/LoginPage";
import Roles from "./Routes/Roles";
import Users from "./Routes/Users";

export default function Router(){
    return (
        <Routes>
            <Route path="/dashboard" element = { <DashBoard />} />
            <Route path="/login" element = { <LoginPage/>} />
            <Route path="/courserating" element = { <CourseRating/>} />
            <Route path="/createrole" element = { <CreateRole/>} />
            <Route path="/courselist" element = { <CourseList/>} />
            <Route path="/addcourse" element = { <AddCourse/>} />
            {/* <Route path="" element = {} />
            <Route path="" element = {} />
            <Route path="" element = {} />
            <Route path="/courses" >
                <Route path="" element = { <CourseList/>} />
                <Route path="courseReport" element={<CourseReport /> } />
            </Route>
            <Route path="/users" element = {<Users />} />
            <Route path="/roles" element = {<Roles />} />
             {/*<Route path="" element = {} />
            <Route path="" element = {} />
            <Route path="" element = {} />
            <Route path="" element = {} />
            <Route path="" element = {} />
            <Route path="" element = {} />
            <Route path="" element = {} />
            <Route path="" element = {} />
            <Route path="" element = {} />
            <Route path="" element = {} />
            <Route path="" element = {} /> */}
        </Routes>
    )
}