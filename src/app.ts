import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`${process.env.value} World`);
});

app.listen(port, () => {
  return console.log(`Express ss is listening at http://localhost:${port}`);
});
