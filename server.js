const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(4000, () => {
  console.log("listening");
});
