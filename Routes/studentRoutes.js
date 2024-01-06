// Import Router 
const router = require("express").Router()

// Import controller
const  { studentController } =  require("../Controller")



// Routes: Get All Student
router.get("/getAll", studentController.getStudents)

// Routes: Update Student information
router.patch("/updateStudentInfo/:studentId", studentController.upadteStudentDetail)

// Route: Get Student
router.get("/getStudent/:studentId",studentController.getStudent)

module.exports = router