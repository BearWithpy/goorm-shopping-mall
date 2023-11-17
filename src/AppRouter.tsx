import React from "react"

import "./App.css"
import LoginPage from "pages/LoginPage/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "pages/MainPage/MainPage"
import SignupPage from "pages/SignupPage/SignupPage"
import { NavBar } from "containers"

const AppRouter = (): React.JSX.Element => {
    return (
        <BrowserRouter>
            <NavBar />
            <hr />
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    {/* <Route path="/mypage" element={<MyPage />} /> */}
                </Routes>
            </div>
            {/* <div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </div> */}
        </BrowserRouter>
    )
}

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {"Copyright ⓒ "}
//             reverselevel, {new Date().getFullYear()}
//             {"."}
//         </Typography>
//     )
// }

export default AppRouter
