const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

const app = express();

//Map global promise
mongoose.Promise = global.Promise;
//Connect to mongoose

mongoose
  .connect("mongodb://localhost/test1", {
    useNewUrlParser: true
  })
  .then(() => console.log("connected"))
  .catch(err => console.log("error"));
//Handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// How middelware works
// app.use(function(req, res, next) {

//   req.name = "Bartek Wilczek";
//   next();
// });

//Index route
app.get("/", (req, res) => {
  const title = "welcome";
  res.render("index", {
    title: title
  });
});

// About route
app.get("/about", (req, res) => {
  res.render("about");
});

const port = 5000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
