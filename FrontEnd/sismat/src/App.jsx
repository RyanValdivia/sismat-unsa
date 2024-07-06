import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SelectCoursePage from "./pages/SelectCoursePage";
import SelectGroupPage from "./pages/SelectGroupPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={LoginPage}></Route>
                <Route path="/register" Component={RegisterPage}></Route>
                <Route path="/pageCourse" Component={SelectCoursePage}></Route>
                <Route path="/pageGroup" Component={SelectGroupPage}></Route>
                <Route path="/confirmation" Component={ConfirmationPage}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;