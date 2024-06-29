import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SelectCoursePage from "./pages/SelectCoursePage";
import SelectGroupPage from "./pages/SelectGroupPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelectGroupPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;