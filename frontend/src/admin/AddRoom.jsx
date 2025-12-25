import AdminSidebar from "../components/AdminSidebar";

const AddRoom = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />

      <div style={{ marginLeft: "240px", padding: "40px" }}>
        <h2>Add New Room</h2>

        <form style={{ maxWidth: "400px" }}>
          <input placeholder="Room Number" style={inputStyle} />
          <input placeholder="Capacity" type="number" style={inputStyle} />
          <select style={inputStyle}>
            <option>AC</option>
            <option>Non-AC</option>
          </select>

          <button style={buttonStyle}>Add Room</button>
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
  background: "#2563eb",
  color: "white",
  border: "none",
  cursor: "pointer",
};

export default AddRoom;
