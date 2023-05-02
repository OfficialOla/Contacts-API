const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

const getContact = asyncHandler(async (req, res) => {
    const contact = await  Contact.find();
    res.status(200).json(contacts);
});

const createContact = asyncHandler(async (req, res) => {
    console.log("The contact created is :", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message: "Create contact"});
});

const updateContact =asyncHandler(async (req, res) => {
    res.status(201).json({message:`Update contact for ${req.params.id}`});
});

const deleteContact = asyncHandler(async (req, res) => {
    res.status(201).json({message: `Delete contact for ${req.params.id}`});
});



module.exports = {getContact, createContact, updateContact, deleteContact};