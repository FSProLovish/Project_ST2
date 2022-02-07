module.exports.home = function (req, res) {
  return res.render("home");
};

module.exports.addContact = function (req, res) {
  return res.render("addContact");
};

module.exports.updateContact = function (req, res) {
  return res.render("updateContact", {
    id: req.query.id,
  });
};
