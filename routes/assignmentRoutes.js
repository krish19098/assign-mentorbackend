// Path: project-root/routes/assignmentRoutes.js
const express = require("express");
const router = express.Router();
const assignmentController = require("../controllers/assignmentController");

router.post("/assign", assignmentController.assignStudentToMentor);

module.exports = router;
