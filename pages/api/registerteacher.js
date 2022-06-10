// api/users.js

import dbConnect from "../../lib/dbConnect";
import TeacherData from "../../models/TeacherData";
const ObjectsToCsv = require("objects-to-csv");
const Datecal = require("./Datecal");

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const teachers = await TeacherData.find({});
        res.status(200);
        res.status(200).json({ success: true, data: teachers });
        // json.stringify(teachers,null,'\t');
        // res.send(teachers)
        // res.json(teachers)
        // <pre>{JSON.stringify( teachers , null, 2)}</pre>
        
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const count = await TeacherData.count();
        //console.log(count);
        const id = `T-${count + 501}`;
        const dateTime = Datecal.datacal();
        //console.log(dateTime);
        const name = req.body.name;
        const email = req.body.email;
        const mobileno = req.body.mobileno;
        const city = req.body.city;
        const pincode = req.body.pincode;
        const eduqual = req.body.eduqual;
        const onteachexp = req.body.onteachexp;
        const offteachexp = req.body.offteachexp;
        const higherclass = req.body.higherclass;
        const subjects = req.body.subjects;
        const examinations = req.body.examinations;
        const aboutus = req.body.aboutus;
        const laptop = req.body.laptop;
        const broadband = req.body.broadband;
        console.log(examinations);
        //CSV File data
        var arraydata = [
          {
            ApplicationID: id,
            Date: dateTime,
            Name: name,
            Email: email,
            Phone: mobileno,
            City: city,
            Pincode: pincode,
            Qualification: eduqual,
            ONTeachExp: onteachexp,
            OFFTeachExp: offteachexp,
            Class: higherclass,
            Subjects: subjects,
            Examinations: examinations,
            Advertise: aboutus,
            Laptop: laptop,
            Broadband: broadband,
          },
        ];
        const csv = new ObjectsToCsv(arraydata).toDisk("./teacherreg.csv", {
          append: true,
        });
        // Mongo Data
        const createTeacherDocument = async (request, response) => {
          try {
            const teacherDataDoc = new TeacherData({
              ApplicationID: id,
              Date: dateTime,
              Name: name,
              Email: email,
              Phone: mobileno,
              City: city,
              Pincode: pincode,
              Qualification: eduqual,
              ONTeachExp: onteachexp,
              OFFTeachExp: offteachexp,
              Class: higherclass,
              Subjects: subjects,
              Examinations: examinations,
              Advertise: aboutus,
              Laptop: laptop,
              Broadband: broadband,
            });
            const result1 = await teacherDataDoc.save();
            // const teachers = await TeacherData.create(req.body)
            res.status(201).json({ success: true, data: "values inserted" })
            // res.send("values inserted");
          } catch (err) {
            console.log(err);
          }
        };
        createTeacherDocument();
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
