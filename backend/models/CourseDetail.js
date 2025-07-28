
const mongoose = require('mongoose');

const courseDetailSchema = new mongoose.Schema({
  facultyName: String,
  designation: String,
  department: String,
  faculty: String,
  programme: String,
  batch: String,
  branch: String,
  semester: String,
  courseName: String,
  courseCode: String,
  courseCredit: String,
  numStudents: Number,
  prerequisites: String,
  corequisites: String,
  dateOfApproval: String,
  universityVision: String,
  universityMission: String,
  departmentVision: String,
  departmentMission: String,
  peos: String,
  pos: String,
  clos: String,
  cos: String,

  photoUrls: {
    type: [String], // array of image URLs
    default: []
  },


  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('CourseDetail', courseDetailSchema);

