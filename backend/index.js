// index.js

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const blogRoute = require("./routes/blogRoute");
const cors = require("cors");
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.error(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/blog", blogRoute);

// Basic GET endpoint for the root path ("/")
app.get("/", (req, res) => {
  res.send("Hello, this is your Express server!");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
