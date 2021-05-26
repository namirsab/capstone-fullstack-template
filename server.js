require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();

app.use(express.json());

/*
All your api endpoints should be prefixed with /api and be before the next ones
If you have many endpoints, consider use Express Router for each set of endpoints
*/
app.get("/api/hello-world", (req, res) => {
  res.status(200).json("Hello World");
});

if (process.env.NODE_ENV === "production") {
  // Serve any static file
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log("listening");
});
