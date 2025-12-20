const express = require("express");

const app = express();
const PORT = 5000;

// middleware
app.use(express.json());

// test route
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running 🚀" });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
