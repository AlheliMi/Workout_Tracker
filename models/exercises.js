const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
   resistance: String,
   cardio: String,
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;