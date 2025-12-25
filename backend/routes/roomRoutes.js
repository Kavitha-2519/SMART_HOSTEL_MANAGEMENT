const express = require("express");
const router = express.Router();

const { protect, isAdmin } = require("../middleware/authMiddleware");
const { getRooms, createRoom } = require("../controllers/roomController");

router.get("/", protect, isAdmin, getRooms);
router.post("/", protect, isAdmin, createRoom);

module.exports = router;
