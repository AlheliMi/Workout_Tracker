const express = require("express");
/* const morgan = require("morgan"); */
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

/* app.use(morgan('combined')); */
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wokout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require('./routes/api-routes'));
app.use(require('./routes/html_routes'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});