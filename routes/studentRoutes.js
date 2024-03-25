// Path: project-root/routes/studentRoutes.js
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/", studentController.createStudent);
router.get(
  "/:studentId/previous-mentor",
  studentController.getPreviousMentorForStudent
);

module.exports = router;
