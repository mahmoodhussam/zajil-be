const express = require("express");
const handleAudio = require("./controller/handleAutio");
const app = express();
require("dotenv").config();
console.log("process.env", process.env);

app.use(express.json());

// routes

app.post("/api/v1/tasks", handleAudio);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
