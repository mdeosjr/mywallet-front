import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage, SignUpPage, RecordsPage, EntryPage, DebtPage } from "./pages"
import UserContext from "./contexts/userContext"

export default function App() {
    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/records" element={<RecordsPage />} />
                    <Route path="/entry-page" element={<EntryPage />} />
                    <Route path="/debt-page" element={<DebtPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}