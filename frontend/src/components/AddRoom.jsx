import { useState } from "react";
import API from "../services/api";

const AddRoom = ({ refreshRooms }) => {
  const [roomNumber, setRoomNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await API.post("/rooms", {
        roomNumber,
        capacity,
        type,
      });

      refreshRooms();
      setRoomNumber("");
      setCapacity("");
      setType("");
    } catch (err) {
      setError(err.response?.data?.message || "Not authorized, token failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p style={{ color: "red" }}>{error}</p>

      <input
        value={roomNumber}
        onChange={(e) => setRoomNumber(e.target.value)}
        placeholder="Room No"
      />

      <input
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
        placeholder="Capacity"
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="AC">AC</option>
        <option value="Non-AC">Non-AC</option>
      </select>

      <button type="submit">Create Room</button>
    </form>
  );
};

export default AddRoom;
