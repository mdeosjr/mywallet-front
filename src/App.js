import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage, SignUpPage, RecordsPage } from "./pages"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/records" element={<RecordsPage />} />
            </Routes>
        </BrowserRouter>
    )
}