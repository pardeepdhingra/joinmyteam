// frontend-server.ts

import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, "frontend")));

// Serve index.html for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Frontend server is running on http://localhost:${port}`);
});
