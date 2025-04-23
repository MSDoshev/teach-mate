const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user"); // Adjust path to where your routes are
const cors = require("cors"); //cross origin resource sharing, client and server are running on different ports
const UserModel = require("./models/User"); 


// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

//CORS middleware to allow cross-origin requests
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

// Use your user routes
app.use("/users", userRoutes);



// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully.");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

//register a user


app.listen(5000, () => console.log("Server running on port 5000..."));
