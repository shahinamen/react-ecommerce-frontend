import { Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import { LoginForm } from "./components/login-form";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<LoginForm />} />
    </Routes>
  );
}
