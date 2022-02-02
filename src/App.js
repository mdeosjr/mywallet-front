import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage, SignUpPage, RecordsPage, EntryPage, DebtPage } from "./pages"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/records" element={<RecordsPage />} />
                <Route path="/entry-page" element={<EntryPage />} />
                <Route path="/debt-page" element={<DebtPage />} />
            </Routes>
        </BrowserRouter>
    )
}