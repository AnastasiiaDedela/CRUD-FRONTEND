import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>it is a backend</h1>");
});

app.listen(port, () => {
  console.log("server is running on port 3000");
});
