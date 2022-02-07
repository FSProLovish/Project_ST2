const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");
const contactController = require("../controllers/contact_controller");

router.get("/", homeController.home);
router.get("/add-contact", homeController.addContact);
router.get("/contact-list", contactController.list);
router.post("/create-contact", contactController.create);
router.get("/delete-contact", contactController.delete);
router.post("/update-contact", contactController.update);

module.exports = router;
