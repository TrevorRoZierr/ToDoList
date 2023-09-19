const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
let items = [];

app.get("/", (req, res) => {
  let today = new Date();
  let options = { month: "long", weekday: "long", day: "numeric" };
  let currentday = today.toLocaleDateString("en-US", options);
  res.render("index", { day: currentday, inputData: items });
});

app.post("/", (req, res) => {
  let input = req.body.liInput;
  items.push(input);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Live on server : 3000");
});
