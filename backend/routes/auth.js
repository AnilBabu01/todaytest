const express = require("express");
const {
  register,
  login,
  addstaff,
  getsfafflist,
  deletestaff,
} = require("../controllers/authController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post(
  "/addstaff",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  addstaff
);
router.get("/getstafflist", isAuthenticatedUser, getsfafflist);
router.delete(
  "/deletestaff/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deletestaff
);
module.exports = router;
