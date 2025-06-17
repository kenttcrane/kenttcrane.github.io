import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Ruby from "./Ruby"
import Shuffle from "./Shuffle"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ruby" element={<Ruby />} />
            <Route path="/shuffle" element={<Shuffle />} />
        </Routes>
    )
}
