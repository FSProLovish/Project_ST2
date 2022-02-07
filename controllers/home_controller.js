// get the Home Page
module.exports.home = function (req, res) {
  return res.render("home");
};

// get the Create Contact Page
module.exports.addContact = function (req, res) {
  return res.render("addContact");
};

// get the Update Contact Page
module.exports.updateContact = function (req, res) {
  return res.render("updateContact", {
    id: req.query.id,
  });
};
