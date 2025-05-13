import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Ruby from "./Ruby"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ruby" element={<Ruby />} />
        </Routes>
    )
}
