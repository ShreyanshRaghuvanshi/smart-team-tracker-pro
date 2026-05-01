const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("My Assignment Web App is Running 🚀");
});
let tasks = [];

app.post("/add-task", (req, res) => {
  const { title } = req.body;
  tasks.push({ title, status: "pending" });
  res.send("Task added");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});
