const express = require("express");

const router = express.Router();

const {getContact,
     createContact, 
    updateContact,
     deleteContact} = require("../controllers/contactController");

router.route("/").get(getContact).post(createContact);

router.route("/:id").put(updateContact).delete(deleteContact);

router.route("/:id").get();

module.exports = router;