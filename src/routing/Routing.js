import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
const Login = React.lazy(() => import("jsx/Screens/Auth"));
const PrivateRoute = React.lazy(() => import("./PrivateRoutes"));
const Dashboard = React.lazy(() => import("jsx/Screens/Dashboard"));
const AdminPanel = React.lazy(() => import("jsx/Screens/AdminPanel"));
const NewPatient = React.lazy(() => import("jsx/Screens/NewPatient"));
const Reports = React.lazy(() => import("jsx/Screens/Reports"));
const Home = React.lazy(() => import("jsx/Screens/Home"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/newpatient" element={<NewPatient />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
