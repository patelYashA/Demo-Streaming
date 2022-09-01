const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://ypaopash:root@cluster0.bzimmkk.mongodb.net/?retryWrites=true&w=majority");
const titleRouter = require("./routes/titles");
app.use("/", titleRouter)
app.listen(port, () => {
    console.log("server is running on port: ${port}");
}) 