import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SalesPage from "./pages/SalesPage";
import { SalesProvider } from "./contexts/sales";

const AppRoutes = () => {
    return (
        <Router>
            <SalesProvider>
                <Routes>

                    <Route path="/" element={<SalesPage />} />

                </Routes>
            </SalesProvider>
        </Router>
    )
}

export default AppRoutes