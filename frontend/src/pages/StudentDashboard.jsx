import { useAuth } from "../context/AuthContext";

const StudentDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: "30px", color: "#fff" }}>
      <h1>🎓 Student Dashboard</h1>

      <div style={{ marginTop: "20px" }}>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <h3>🏠 Room Details</h3>
      <p>No room allocated yet.</p>

      <button
        onClick={logout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#b71c1c",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default StudentDashboard;
