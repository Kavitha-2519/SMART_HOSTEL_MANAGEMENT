import { Link } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2 className="logo">Admin Panel</h2>

      <nav>
        <Link to="/admin/dashboard">📊 Dashboard</Link>
        <Link to="/admin/rooms">🏠 Manage Rooms</Link>
        <Link to="/admin/students">👨‍🎓 Manage Students</Link>
        <Link to="/admin/allocate">🛏 Allocate Room</Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
