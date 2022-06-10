const mongoose = require('mongoose')

const StudentEnqData = new mongoose.Schema({
    ApplicationID: String,
    Date: { type: Date, default: Date.now },
    Name: String,
    Phone: String,
    City: String,
    Grade: String,
    Subjects: Array,
    Examinations: Array,
    Services: Array
})


module.exports = mongoose.models.StudentEnquiry || mongoose.model("StudentEnquiry",StudentEnqData)
// const Teacherdata = mongoose.model("TeacherRegEnquiry",teacherRegSchema)
// module.exports = Teacherdata