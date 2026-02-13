const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Portfolio Backend is running");
});

// Contact form route
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newMessage = {
    name,
    email,
    message,
    date: new Date().toISOString(),
  };

  let messages = [];
  if (fs.existsSync("messages.json")) {
    messages = JSON.parse(fs.readFileSync("messages.json"));
  }

  messages.push(newMessage);
  fs.writeFileSync("messages.json", JSON.stringify(messages, null, 2));

  res.status(200).json({ success: "Message sent successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 