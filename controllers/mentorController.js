// Path: project-root/controllers/mentorController.js
const Mentor = require("../models/mentorModel");
const Student = require("../models/studentModel");

exports.createMentor = async (req, res) => {
  try {
    const { name } = req.body;
    const mentor = new Mentor({ name });
    await mentor.save();
    res.status(201).json({ message: "Mentor created successfully", mentor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllStudentsForMentor = async (req, res) => {
  try {
    const mentorId = req.params.mentorId;
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }
    const students = await Student.find({ mentor: mentorId });
    res.json({ students }); // Return only the students array
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
