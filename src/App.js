import { BrowserRouter } from "react-router-dom";
import Paths from "./Components/Paths";
import Router from "./Router";
import "./CSS/App.css"
import Header from "./Components/Header";
import UserInTable from "./Components/UserInTable";


function App() {
  return (
    <BrowserRouter>
        <Paths />
        <Header />
        <Router />
    </BrowserRouter>
  );
}

export default App;
