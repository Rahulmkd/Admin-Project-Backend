const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(400).send("Root");
});

app.get("/register", (req, res) => {
  res.status(200).send("Register Page");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is running at: ${PORT}`);
});
