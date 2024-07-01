import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SelectCoursePage from "./pages/SelectCoursePage";
import SelectGroupPage from "./pages/SelectGroupPage";
import ConfirmationPage from "./pages/ConfirmationPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelectGroupPage />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/pageLogin" Component={LoginPage}></Route>
                <Route path="/pageCourse" Component={SelectCoursePage}></Route>
                <Route path="/pageGroup" Component={SelectGroupPage}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;