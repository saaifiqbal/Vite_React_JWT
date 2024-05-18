import React, { Fragment, useEffect } from "react";
import "./App.css";
import NonLayout from "./Layouts/NonLayout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import DashboardLayout from "./Layouts/DashboardLayout";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (!user) {
      navigate("/login");
    }else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<NonLayout />} />
        <Route path="/" element={<DashboardLayout />} />
      </Routes>
    </Fragment>
  );
}

export default App;
