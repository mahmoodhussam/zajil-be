const express = require("express");
const app = express();
const handleAudio = require("./controller/handleAutio");
var cors = require("cors");

var corsOptions = {
  origin: ["https://zajil-fe.vercel.app", "http://localhost:3000"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

require("dotenv").config();

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
