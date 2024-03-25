// Path: project-root/controllers/assignmentController.js
const Student = require("../models/studentModel");
const Mentor = require("../models/mentorModel");

exports.assignStudentToMentor = async (req, res) => {
  try {
    const { studentId, mentorId } = req.body;

    const student = await Student.findById(studentId);
    const mentor = await Mentor.findById(mentorId);

    if (!student || !mentor) {
      return res.status(404).json({ message: "Student or Mentor not found" });
    }

    student.mentor = mentorId;
    mentor.students.push(studentId);

    await student.save();
    await mentor.save();

    res.json({ message: "Student assigned to Mentor successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
