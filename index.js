const express = require("express");
const app = express();
const port = 8000;

const db = require("./config/mongoose");

app.use(express.urlencoded());
app.use(express.static("./assets"));

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// use express router
app.use("/", require("./routes"));

// Server is running on PORT 8000
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on Port: ${port}`);
});
