import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Welcome, {user?.name} 👋</h1>
      <p>Role: {user?.role}</p>
      <p>This is your dashboard.</p>
    </div>
  );
};

export default Dashboard;
