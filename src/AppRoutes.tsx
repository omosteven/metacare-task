import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { DashboardPage } from "./pages";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<DashboardPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
