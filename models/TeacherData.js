import mongoose from 'mongoose';

const teacherRegSchema = new mongoose.Schema({
    ApplicationID: String,
    Date: { type: Date, default: Date.now },
    Name: String,
    Email: String,
    Phone: String,
    City: String,
    Pincode: Number,
    Qualification: String,
    ONTeachExp: Number,
    OFFTeachExp: Number,
    Class: String,
    Subjects: Array,
    Examinations: Array,
    Advertise: String,
    Laptop: String,
    Broadband: String
})


module.exports =  mongoose.models.TeacherApplication || mongoose.model("TeacherApplication",teacherRegSchema)
// const Teacherdata = mongoose.model("TeacherRegEnquiry",teacherRegSchema)
// module.exports = Teacherdata