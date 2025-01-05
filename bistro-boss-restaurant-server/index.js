require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { connection, client } = require("./BD/Server");
const { ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;
connection();

//Middleware
app.use(express.json());
app.use(cors());

//custom middleware
const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    req.decoded = decoded;
    next();
  });
};
const verifyAdmin = async (req, res, next) => {
  const email = req.decoded.email;
  const query = { email: email };
  const user = await userCollections.findOne(query);
  const isAdmin = user.role === "admin";
  if (!isAdmin) {
    return res.status(403).send({ message: "Forbidden" });
  }
  next();
};
const bistroMenuCollections = client.db("bistroDB").collection("menu");
const bistroReviewsCollections = client.db("bistroDB").collection("reviews");
const addCartCollections = client.db("bistroDB").collection("carts");
const userCollections = client.db("bistroDB").collection("users");

//create token
app.post("/jwt", async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.TOKEN_SECRET_KEY, {
    expiresIn: "1h",
  });
  res.send({ token });
});

//save users data
app.post("/users", async (req, res) => {
  const user = req.body;
  const existUsers = await userCollections.findOne({ email: user.email });
  if (existUsers) {
    return res.send("User already exists");
  }
  const result = await userCollections.insertOne(user);
  res.send(result);
});

//all users get
app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
  const result = await userCollections.find().toArray();
  res.send(result);
});

//delete users by id
app.delete("/user/:id", verifyToken, verifyAdmin, async (req, res) => {
  const id = req.params.id;
  const result = await userCollections.deleteOne({ _id: new ObjectId(id) });
  res.send(result);
});

//updata role
app.patch("/user/admin/:id", verifyToken, verifyAdmin, async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updataDoc = {
    $set: {
      role: "admin",
    },
  };
  const result = await userCollections.updateOne(filter, updataDoc);
  res.send(result);
});

//check admin role by email
app.get("/user/admin/:email", verifyToken, async (req, res) => {
  const email = req.params.email;
  if (email !== req.decoded.email) {
    res.status(403).send({ message: "Forbidden" });
  }
  const query = { email: email };
  const user = await userCollections.findOne(query);
  if (user.role === "admin") {
    res.send(true);
  } else {
    res.send(false);
  }
});
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

//get all add cart data from the cart collection
app.get("/carts", async (req, res) => {
  const email = req.query.email;
  const result = await addCartCollections.find({ email: email }).toArray();
  res.send(result);
});

//delete all add cart data from the cart collection by id
app.delete("/carts/:id", async (req, res) => {
  const id = req.params.id;
  const result = await addCartCollections.deleteOne({ _id: new ObjectId(id) });
  res.send(result);
});
app.get("/", (req, res) => {
  res.send("bistro boss server in running");
});
app.listen(port, () => {
  console.log(`bistro boss server is running on port ${port}`);
});
