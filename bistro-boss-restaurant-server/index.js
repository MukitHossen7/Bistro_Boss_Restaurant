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

app.get("/allMenu", async (req, res) => {
  const result = await bistroMenuCollections.find().toArray();
  res.send(result);
});
app.get("/", (req, res) => {
  res.send("bistro boss server in running");
});
app.listen(port, () => {
  console.log(`bistro boss server is running on port ${port}`);
});
