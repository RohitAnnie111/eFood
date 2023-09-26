const mongoose = require("mongoose");
const validator = require("validator");


const bycript = require("bcrypt");

const express = require("express");

const bodyparser = require("body-parser"); // to read the data

const cors = require("cors"); // server is allowing to connect with another server.

const app = express();

const jwt = require("jsonwebtoken");
const jwtSecret = "mynameisrohitkafleanniekafleismygirlfried";
app.use(cors()); //Cross-Origin Resource Sharing

app.use(bodyparser.json()); // also available one method url encoded

mongoose
  .connect("mongodb://127.0.0.1:27017/Userdata")
  .then(() => {
    console.log("successfully conneted");
  })
  .catch((e) => {
    console.log("failed to connect ", e);
  });





 

const Catoagory = new mongoose.Schema({
  CategoryName: String,
});

const userschema = new mongoose.Schema({
  email: String,
  password: String,
  c_password: String,
});

const optionSchema = new mongoose.Schema({
  regular: String,
  medium: String,
  Larger: String,
});

// third schema..
const food_items = new mongoose.Schema({
  CategoryName: String,
  name: String,
  img: String,
  options: [optionSchema],
  description: String,
});


// for OrderSchema..

const OrderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  order_data: {
    type: Array,
    required: true,
  },
});



const Order = mongoose.model("order", OrderSchema);





// this code will run after post and before save
// pre save na v likhu to chal jayega and this.password ko v req.body.password se replace kiya ja sakta hai////
userschema.pre("save", async function (next) {
  // notice i didnot use model (user) but i used userscema which has inbuilt funtions to make hash

  if (this.isModified("password")) {
    // is modified means make it hash only when some one modify password
    this.password = await bycript.hash(this.password, 10);
  }

  next(); // next fucntion is just like exit from this work and run remaing codes
});

const user = new mongoose.model("user", userschema);
const Food_items = new mongoose.model("food_items", food_items);
const FoodCategory = new mongoose.model("food_categorys", Catoagory);

// For Signup....

app.post("/home/food_item", async (req, res) => {
  let dta = await Food_items.findOne({ CategoryName: "Biryani/Rice" });

  res.send(dta);
});





app.post("/home/Signup", async (req, res) => {
  try {

    let email = req.body.email;

    let Userdata = await user.findOne({ email });

    if (!Userdata) {
      let password = req.body.password;
      let c_password = req.body.c_password;

      if (password === c_password) {
        let data = new user({
          email: req.body.email,

          password: req.body.password,
        });

        const doc = await data.save();

        console.log(doc);

        return res.json({ emailpassword: true, userEmail: email });
      } else {
        console.log("password does not match");
        return res.json({ passwordfalls: true });
      }
    } else {
      console.log("This is email is alread in use");

      return res.json({ emailexist: true });
    }
  } catch (error) {
    console.log("error is ", error);
    return res.json({ success: true });
  }
});




//For login ....

app.post("/home/Login", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let Userdata = await user.findOne({ email });

  if (!Userdata) {
    // if empty then return fals
    console.log("return somthing bad");
    return res.json({ success: false });
  }

  // it must me after this if condition
  const data = {
    user: {
      id: Userdata.id,
    },
  };

  const authToken = jwt.sign(data, jwtSecret);

  const isMatch = await bycript.compare(password, Userdata.password); // comparing with hash password, returns true or false

  if (!isMatch) {
    return res.json({ success: false });
  } else if (Userdata.email === email) {
    return res.json({ success: true, authToken: authToken, userEmail: email });
  }
});

app.post("/fooditems", async (req, res) => {
  const foditems = await Food_items.find();
  const foodcat = await FoodCategory.find();

  // Access the "Large" property

  res.send([foditems, foodcat]);
});

// order data .....

app.post("/orderData", async (req, res) => {
  const { email, order_date, order_data } = req.body;

  try {
    // Check if email exists in the Order collection

    const existingOrder = await Order.findOne({ email: email });

    if (existingOrder === null) {
      // If the email does not exist, create a new order
      await Order.create({
        email: email,
        order_data: [{ Order_date: order_date }, ...order_data],
      });

      res.json({ success: true });
    } else {
      // If the email exists, update the existing order
      await Order.findOneAndUpdate(
        { email: email },
        { $push: { order_data: { Order_date: order_date }, ...order_data } }
      );

      res.json({ success: true });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(80, () => {
  console.log("listinig to prot no 80");
});
