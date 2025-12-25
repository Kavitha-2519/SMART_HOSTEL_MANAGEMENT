const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const roomRoutes = require("./routes/roomRoutes");

dotenv.config();
connectDB();

const app = express();

// 🔥 CORS FIX (THIS IS THE KEY)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/rooms", roomRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend running 🚀" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
