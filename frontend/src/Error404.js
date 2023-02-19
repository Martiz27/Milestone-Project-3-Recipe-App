import { Route, Routes } from "react-router-dom"
import WelcomePage from "./WelcomePage";

function Error404() {
    return (
        <div class="error">
            <img src="../public/404img.png" alt="Error Page" />
            <h1>404</h1>
            <h1>Oops! Looks like the page you were looking for was removed or is temporary not available</h1>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
            </Routes>
        </div>
    )
}

export default Error404;