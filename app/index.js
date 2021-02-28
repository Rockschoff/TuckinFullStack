const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

var submits = 0;

//connect to data

mongoose.connect("mongodb://localhost:27017/TuckinDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   reviews: String,
// });
//
// const Fruit = mongoose.model("Fruit", fruitSchema);
//
// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   reveiws: "nice",
// });

// fruit.save();

const ClickSchema = new mongoose.Schema({
  page: String,
  button: String,
  count: Number,
});

const FormSchema = new mongoose.Schema({
  email: String,
  number: String,
});

const BuySchema = new mongoose.Schema({
  product: String,
  color: String,
  cart: String,
  size: String,
});

const Click = mongoose.model("Click", ClickSchema);

const Form = mongoose.model("Form", FormSchema);

const Buy = mongoose.model("Buy", BuySchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "./tuckin/build")));

// app.get("/", function (req, res) {
//   res.send("Backend Successfully connected!");
// });

app.get("/test", function (req, res) {
  // console.log("request was made!");
  res.send("Node connected to React!");
});

app.post("/form", function (req, res) {
  console.log("req from form!!", req.body);
  const email = req.body.email;
  const number = req.body.number;

  const form = new Form({
    email: email,
    number: number,
  });

  form.save();
  // console.log(submit);
  res.send({ message: "this is some message" });
});

app.post("/data", function (req, res) {
  console.log(req.body);
  res.send({ message: "data recieved by back end" });
  const page = req.body.data.pageName;
  const button = req.body.data.ButtonName;
  Click.find({ page: page, button: button }, function (err, clicks) {
    if (err) {
      console.log("error in finding", err);
    } else {
      console.log("updating", clicks);
      if (clicks.length === 0) {
        const click = new Click({
          page: page,
          button: button,
          count: 1,
        });

        click.save();
      } else {
        clicks.forEach((c) => {
          const num = c.count + 1;
          Click.updateOne(
            { page: page, button: button, count: num - 1 },
            { count: num },
            function (err) {
              if (err) {
                console.log("update mein err hai", err);
              }
            }
          );
        });
      }
    }
  });
});

app.post("/bought", function (req, res) {
  console.log(req.body);
  res.send({ message: "data recieved by back end" });
  const cart = req.body.data.cart;
  const size = req.body.data.size;
  const product = req.body.data.product;
  const color = req.body.data.color;
  const buy = new Buy({
    product: product,
    color: color,
    cart: cart,
    size: size,
  });
  buy.save();
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./tuckin/build", "index.html"));
  console.log("this is it");
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, function () {
  console.log("Server connected successfully");
});
