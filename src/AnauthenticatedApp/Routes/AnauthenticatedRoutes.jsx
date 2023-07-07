import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

const AnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="login" replace={true} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route />
    </Routes>
  );
};

export default AnauthenticatedRoutes
