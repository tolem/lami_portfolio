require("dotenv").config();
const SibApiV3Sdk = require("sib-api-v3-sdk");

export default function handler(req, res) {
  // the backend got a post request (here it will only be for newsletter subscribe event)
  if (req.method === "POST") {
    // getting the email
    const email = req.body.email;

    // to see if you get the correct email and that you have the correct api key your .env.local
    // console.log(email);
    // console.log(`my env api key is : ${process.env.SENDINBLUE_API_KEY}`)

    // auth + setup
    let defaultClient = SibApiV3Sdk.ApiClient.instance;
    let apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

    // create contact
    let apiInstance = new SibApiV3Sdk.ContactsApi();
    let createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = email;
    createContact.listIds = [2];

    // call SIB api
    apiInstance.createContact(createContact).then(
      (data) => {
        // success
        res.status(200);
        res.send("success");
      },
      function (error) {
        // error code 400 means it already has joined the mailing list
        if (error.status === 400) {
          res.status(400);
          res.send("already in contact");
        } else {
          console.log(error.status);
          res.status(500);
          res.send("failure");
        }
      }
    );
  }
}
