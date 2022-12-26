import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SalesPage from "./pages/SalesPage";
import { SalesProvider } from "./contexts/sales";
import { GeneralProvider } from "./contexts/general";

const AppRoutes = () => {
    return (
        <Router>
            <GeneralProvider>
                <SalesProvider>
                    <Routes>

                        <Route path="/" element={<SalesPage />} />

                    </Routes>
                </SalesProvider>
            </GeneralProvider>
        </Router>
    )
}

export default AppRoutes