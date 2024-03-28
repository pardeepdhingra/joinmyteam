// src/server.ts

import express from "express";
import bodyParser from "body-parser";
import applicantRoutes from "./routes/applicants";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", applicantRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
