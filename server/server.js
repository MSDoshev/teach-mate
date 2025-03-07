const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user"); // Adjust path to where your routes are

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// Use your user routes
app.use("/users", userRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully.");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(5000, () => console.log("Server running on port 5000..."));
