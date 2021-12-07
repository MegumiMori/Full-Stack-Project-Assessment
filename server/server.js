const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
let videos = require("../exampleresponse.json");

// GET "/"
app.get("/", (req, res) => {
  // Delete this line after you've confirmed your server is running
  // res.send({ express: "Your Backend Service is Running" });
  res.send(videos);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
