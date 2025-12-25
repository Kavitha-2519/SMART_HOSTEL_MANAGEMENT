import { useAuth } from "../context/AuthContext";

const WardenDashboard = () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: "40px" }}>
      <h1>🏢 Warden Dashboard</h1>
      <p>Welcome, {user?.name}</p>

      <hr />

      <ul>
        <li>👀 Monitor Room Occupancy</li>
        <li>🧾 Student Complaints</li>
        <li>🔍 Room Inspections</li>
      </ul>
    </div>
  );
};

export default WardenDashboard;
