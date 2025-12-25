const jwt = require("jsonwebtoken");
const User = require("../models/User");

// 🔐 Protect routes (JWT verification)
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from DB (exclude password)
      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }

      // Attach user to request
      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

// 👮 Admin-only access
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Admin access only" });
  }
};

// 🧑‍🏫 Warden-only access
const isWarden = (req, res, next) => {
  if (req.user && req.user.role === "warden") {
    next();
  } else {
    return res.status(403).json({ message: "Warden access only" });
  }
};

module.exports = {
  protect,
  isAdmin,
  isWarden,
};
