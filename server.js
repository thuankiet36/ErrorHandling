require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const bookRoute = require("./routes/book.route");

mongoose.connect(
  process.env.URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Seccess connected");
    } else {
      console.log("Error connecting to database");
    }
  }
);
mongoose.set("useFindAndModify", false);

const app = express();

app.use("/", bookRoute);

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
