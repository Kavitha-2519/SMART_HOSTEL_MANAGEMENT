const userRoutes = require("./routes/userRoutes");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config(); // MUST be before connectDB()

const app = express();
const PORT = process.env.PORT || 5000;

// MUST be called
connectDB();
app.use(express.json());
app.use("/api/users", userRoutes);
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend & DB are running 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
