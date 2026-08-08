import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddCertificate from "./pages/AddCertificate";
import ViewCertificates from "./pages/ViewCertificates";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/add-certificate" element={<AddCertificate />} />

      <Route path="/view-certificates" element={<ViewCertificates />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;