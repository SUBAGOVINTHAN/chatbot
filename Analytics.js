const mongoose = require("mongoose");

// Define schema for form data
const formDataSchema = new mongoose.Schema({
    walking: Number,
    water: Number,
    yoga: Number
});

// Create model based on schema
const FormData = mongoose.model("FormData", formDataSchema);

module.exports = FormData;
