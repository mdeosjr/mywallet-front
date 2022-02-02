import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login'
import RegisterPage from "./pages/Register";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    )
}