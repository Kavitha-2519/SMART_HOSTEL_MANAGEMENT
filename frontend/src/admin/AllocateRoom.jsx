import AdminSidebar from "../components/AdminSidebar";

const AllocateRoom = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />

      <div style={{ marginLeft: "240px", padding: "40px" }}>
        <h2>Allocate Room</h2>

        <form style={{ maxWidth: "400px" }}>
          <input placeholder="Student Email" style={inputStyle} />
          <input placeholder="Room Number" style={inputStyle} />

          <button style={buttonStyle}>Allocate</button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
};

const buttonStyle = {
  padding: "10px",
  background: "#16a34a",
  color: "white",
  border: "none",
};

export default AllocateRoom;
