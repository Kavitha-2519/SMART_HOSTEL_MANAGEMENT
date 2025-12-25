import AdminSidebar from "../components/AdminSidebar";
import "./AdminDashboard.css";
import AdminRooms from "./AdminRooms";

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <h1>👑 Admin Dashboard</h1>
        <p>Welcome Admin! Manage hostel operations from here.</p>

        <div className="admin-cards">
          <div className="card">Total Rooms</div>
          <div className="card">Total Students</div>
          <div className="card">Available Rooms</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
