const express = require("express");
const router = express.Router();

const {
  adminDashboard,
  roomsReport,
  studentAllocationReport,
} = require("../controllers/adminController");

const { protect } = require("../middleware/authMiddleware");

// Admin-only middleware
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Admin access only" });
  }
};

// Admin dashboard
router.get("/dashboard", protect, adminOnly, adminDashboard);

// Rooms report
router.get("/rooms-report", protect, adminOnly, roomsReport);

// Student allocation report
router.get(
  "/student-allocations",
  protect,
  adminOnly,
  studentAllocationReport
);

module.exports = router;
