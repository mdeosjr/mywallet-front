import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage, SignUpPage, RecordsPage, MovementPage } from "./pages"
import UserContext from "./contexts/userContext"

export default function App() {
    const [user, setUser] = useState(null);
    const [page, setPage] = useState('');

    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/records" element={<RecordsPage setPage={setPage}/>} />
                    <Route path="/movements-page" element={<MovementPage page={page}/>} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}