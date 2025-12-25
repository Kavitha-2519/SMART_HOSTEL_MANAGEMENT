import { useEffect, useState } from "react";
import API from "../services/api";
import AddRoom from "../components/AddRoom";

const AdminRooms = () => {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    try {
      const res = await API.get("/rooms");
      setRooms(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🏠 Manage Rooms</h2>

      <AddRoom refreshRooms={fetchRooms} />

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Room No</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Available</th>
          </tr>
        </thead>

        <tbody>
          {rooms.map((room) => (
            <tr key={room._id}>
              <td>{room.roomNumber}</td>
              <td>{room.type}</td>
              <td>{room.capacity}</td>
              <td>{room.isAvailable ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRooms;
