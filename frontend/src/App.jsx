import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import WardenDashboard from "./pages/WardenDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleProtectedRoute from "./components/RoleProtectedRoute";
import Navbar from "./components/Navbar";
import AdminRooms from "./pages/AdminRooms";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* STUDENT */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="student">
                <StudentDashboard />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="admin">
                <AdminDashboard />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        {/* WARDEN */}
        <Route
          path="/warden/dashboard"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="warden">
                <WardenDashboard />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />
        <Route
  path="/admin/rooms"
  element={
    <ProtectedRoute>
      <RoleProtectedRoute role="admin">
        <AdminRooms />
      </RoleProtectedRoute>
    </ProtectedRoute>
  }
/>

      </Routes>
    </>
  );
}

export default App;
