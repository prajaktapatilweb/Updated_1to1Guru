const mongoose = require('mongoose')

const contactDataSchema = new mongoose.Schema({
    ContactID: String,
    Date: { type: Date, default: Date.now },
    Name: String,
    Email: String,
    Phone: String,
    Subject: String,
    Message: String
})


module.exports = mongoose.models.ContactFormData || mongoose.model("ContactFormData",contactDataSchema)


// const Teacherdata = mongoose.model("TeacherRegEnquiry",teacherRegSchema)
// module.exports = Teacherdata