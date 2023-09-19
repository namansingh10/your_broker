const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const authController = require('./controllers/authController')
const propertyController = require('./controllers/propertyController')
const app = express();
const uploadController = require('./controllers/uploadController');
const yachtController = require("./controllers/yachtController");
const userController = require("./controllers/userController");
const commentController = require("./controllers/commentController");

// db connecting
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, () => console.log("MongoDB has been started"));

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('public/images'))

app.use("/auth", authController);
app.use("/property", propertyController);
app.use("/yacht", yachtController);
app.use('/upload', uploadController)
app.use('/user', userController)
app.use('/comment', commentController)

// starting server
// const port = process.env.PORT || 5000;
app.listen(process.env.PORT, () => console.log("Server has been started"));