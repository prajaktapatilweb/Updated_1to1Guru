// api/users.js
import dbConnect from "../../lib/dbConnect";
import StudentData from "../../models/StudentData";
const ObjectsToCsv = require("objects-to-csv");
const Datecal = require("./Datecal");

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const students = await StudentData.find({});
        res.status(200).json({ success: true, data: students });
        // res.send(students)
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const counts = await StudentData.count();
        //console.log(count);
        const id = `S-${counts + 500}`;
        const dateTime = Datecal.datacal();
        const name = req.body.name;
        const mobileno = req.body.mobileno;
        const city = req.body.city;
        const grade = req.body.grade;
        const subjects = req.body.subjects;
        const examinations = req.body.examinations;
        const services = req.body.services;

        //CSV File data
        var arraydata = [
          {
            ApplicationID: id,
            Date: dateTime,
            Name: name,
            Phone: mobileno,
            City: city,
            Grade: grade,
            Subjects: subjects,
            Examinations: examinations,
            Services: services
          },
        ];
        const csv = new ObjectsToCsv(arraydata).toDisk("./studentsreg.csv", {
          append: true,
        });
        // Mongo Data
        const createStudentDocument = async (request, response) => {
          try {
            const studentDataDoc = new StudentData({
              ApplicationID: id,
              Date: dateTime,
              Name: name,
              Phone: mobileno,
              City: city,
              Grade: grade,
              Subjects: subjects,
              Examinations: examinations,
              Services: services
            });
            const result2 = await studentDataDoc.save();
            // const teachers = await TeacherData.create(req.body)
            res.status(201).json({ success: true, data: "values inserted" })
            // res.send("values inserted");
          } catch (err) {
            console.log(err);
          }
        };
        createStudentDocument();
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
