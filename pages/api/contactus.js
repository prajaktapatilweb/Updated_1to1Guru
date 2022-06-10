// api/users.js
import dbConnect from "../../lib/dbConnect";
import ContactData from "../../models/ContactData";
const ObjectsToCsv = require("objects-to-csv");
const Datecal = require("./Datecal");

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const contactsd = await ContactData.find({});
        // res.status(200).json( {contactsd} );
        res.status(200).json({ success: true, data: contactsd });
        // res.send(data)
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        // const counts = await ContactData.count();
        //console.log(counts);
        // const id = `C-${counts + 500}`;
        // const dateTime = Datecal.datacal();
        console.log('Come');
        const name = req.body.name;
        const email = req.body.email;
        const mobileno = req.body.mobileno;
        const subject = req.body.subject;
        const message = req.body.message;
    

        //CSV File data
        var arraydata = [
          {
            // "Contact ID": id,
            // "Date": dateTime,
            "Name": name,
            "Email": email,
            "Phone": mobileno,
            "Subject": subject,
            "Message": message,
          },
        ];
        const csv = new ObjectsToCsv(arraydata).toDisk("./contactdetail.csv", {
          append: true,
        });
        // Mongo Data
        const createContactDocument = async (request, response) => {
          try {
            const ContactDataDoc = new ContactData({
              // ContactID: id,
              // Date: dateTime,
              Name: name,
              Email: email,
              Phone: mobileno,
              Subject: subject,
              Message: message,
            });
            const result3 = await ContactDataDoc.save();
            // const teachers = await TeacherData.create(req.body)
            res.status(201).json({ success: true, data: "values inserted" })
            // res.send("values inserted");
          } catch (err) {
            console.log(err);
          }
        };
        createContactDocument();
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
