const express = require("express");
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGO_URI);



// app.get("/api", (req, res) => {
//   res.json({ users: ["userOne", "userTwo"] });
// });

app.listen(5000, () => console.log("Server running on port 5000..."));
