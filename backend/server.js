import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("GET to the homepage");
});

app.post("/", (req, res) => {
  res.send("POST to the homepage");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
