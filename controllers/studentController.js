// Path: project-root/controllers/studentController.js
const Student = require("../models/studentModel");
const Mentor = require("../models/mentorModel");

exports.createStudent = async (req, res) => {
  try {
    const { name } = req.body;
    const student = new Student({ name });
    await student.save();
    res.status(201).json({ message: "Student created successfully", student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPreviousMentorForStudent = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    // Find the student
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    // Check if the student has a previously assigned mentor
    if (!student.mentor) {
      return res
        .status(404)
        .json({
          message: "No previously assigned mentor found for the student",
        });
    }
    // Find the previously assigned mentor
    const mentor = await Mentor.findById(student.mentor);
    if (!mentor) {
      return res
        .status(404)
        .json({ message: "Previously assigned mentor not found" });
    }
    res.json({ student, mentor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
