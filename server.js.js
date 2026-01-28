const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());

const SITE_DIR = __dirname;

// Serve static files from this exact folder
app.use(express.static(SITE_DIR));

// Force the homepage to load index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(SITE_DIR, "index.html"));
});

// Also serve these directly (optional but helps)
app.get("/success", (req, res) => {
  res.sendFile(path.join(SITE_DIR, "success.html"));
});

app.get("/cancel", (req, res) => {
  res.sendFile(path.join(SITE_DIR, "cancel.html"));
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log(`Thumbly running on http://localhost:${PORT}`);
});
