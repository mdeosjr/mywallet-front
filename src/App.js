import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                {/* <Route path="/register" element={<RegisterPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}