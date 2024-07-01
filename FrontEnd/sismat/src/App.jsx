import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SelectCoursePage from "./pages/SelectCoursePage";
import SelectGroupPage from "./pages/SelectGroupPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelectCoursePage />} />
                <Route path="/pageLogin" Component={LoginPage}></Route>
                <Route path="/pageCourse" Component={SelectCoursePage}></Route>
                <Route path="/pageGroup" Component={SelectGroupPage}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;