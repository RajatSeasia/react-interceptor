// Importing necessary modules and components from React and React Router
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import SignIn from "../pages/sign-up/Sign-in";
import ProtectedRoute from "./ProtectedRoute";
import AllUsers from "../pages/allUser/AllUsers";

export default function RouteFile() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/home" element={<AllUsers />} />
      </Route>
    </Routes>
  );
}
