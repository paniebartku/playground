const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
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

//Load idea model

require("./models/Idea");
const Idea = mongoose.model("ideas");
//Handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// How middelware works
// app.use(function(req, res, next) {

//   req.name = "Bartek Wilczek";
//   next();
// });

//Body Parser middleware

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

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

app.get("/ideas", (req, res) => {
  Idea.find({})
    .sort({ date: "desc" })
    .then(ideas => {
      res.render("ideas/index", {
        ideas: ideas
      });
    });
});

app.get("/ideas/add", (req, res) => {
  res.render("ideas/add");
});

// Process Form
app.post("/ideas", (req, res) => {
  let errors = [];

  if (!req.body.title) {
    errors.push({ text: "Please add a title" });
  }
  if (!req.body.details) {
    errors.push({ text: "Please add some details" });
  }

  if (errors.length > 0) {
    res.render("ideas/add", {
      errors: errors,
      title: req.body.title,
      details: req.body.details
    });
  } else {
    // res.send("ok");
    const newUser = {
      title: req.body.title,
      details: req.body.details
    };
    new Idea(newUser).save().then(idea => {
      res.redirect("/ideas");
    });
  }
});
const port = 5000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
