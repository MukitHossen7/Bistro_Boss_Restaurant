require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection, client } = require("./BD/Server");
const app = express();
const port = process.env.PORT || 5000;
connection();
//Middleware
app.use(express.json());
app.use(cors());

const bistroMenuCollections = client.db("bistroDB").collection("menu");
const bistroReviewsCollections = client.db("bistroDB").collection("reviews");
const addCartCollections = client.db("bistroDB").collection("carts");

//get all menu data
app.get("/allMenu", async (req, res) => {
  const result = await bistroMenuCollections.find().toArray();
  res.send(result);
});

//get all review data
app.get("/allReview", async (req, res) => {
  const result = await bistroReviewsCollections.find().toArray();
  res.send(result);
});
app.get("/categoryData", async (req, res) => {
  const category = req.query.category;
  const result = await bistroMenuCollections
    .find({ category: category })
    .toArray();
  res.send(result);
});

// add to cart in addCartCollections
app.post("/carts", async (req, res) => {
  const cart = req.body;
  const result = await addCartCollections.insertOne(cart);
  res.send(result);
});
app.get("/", (req, res) => {
  res.send("bistro boss server in running");
});
app.listen(port, () => {
  console.log(`bistro boss server is running on port ${port}`);
});
