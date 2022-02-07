const Contact = require("../models/contact");

// To Render Contact's on client side
module.exports.list = function (req, res) {
  Contact.find({}, function (err, contacts) {
    if (err) {
      console.log("error in fetching the contacts from database");
      return;
    }
    return res.render("contactList", {
      title: "Contact List Page",
      contact_list: contacts,
    });
  });
};

// To Add more Contact's to the DataBase
module.exports.create = function (req, res) {
  Contact.findOne({ email: req.body.email }, function (err, contact) {
    if (err) {
      console.log("error in finding the contact");
      return;
    }
    if (!contact) {
      Contact.create(
        {
          name: req.body.name,
          phone: req.body.phone,
          email: req.body.email,
        },
        function (err, newContact) {
          if (err) {
            console.log("Error in creating a contact");
            return;
          }
          res.redirect("/contact-list");
        }
      );
    } else {
      return res.redirect("back");
    }
  });
};

// To Delete Contact from DataBase
module.exports.delete = function (req, res) {
  let id = req.query.id;
  Contact.findByIdAndDelete(id, (err) => {
    if (err) {
      console.log("error in deleting the contact from the database");
      return;
    }
    return res.redirect("back");
  });
};

// To Update a Contact in DataBase
module.exports.update = function (req, res) {
  let id = req.query.id;
  Contact.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    },
    function (err) {
      if (err) {
        console.log("Error in updating the contact in Database!");
      }
      res.redirect("/contact-list");
    }
  );
};
