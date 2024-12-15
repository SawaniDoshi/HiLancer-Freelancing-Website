const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const axios = require("axios"); // Add axios to make HTTP requests
const userRoutes = require("./routes/user.route"); 
const authRoutes = require("./routes/authentication.route");
const jobRoutes = require("./routes/PostJob.route");
const fs = require("fs");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:5173', // Allow this origin only
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

// Set up MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
});

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Create an uploads folder if it doesn't exist
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Define the upload route
app.post("/upload", upload.single("profileImage"), (req, res) => {
  try {
    console.log(req.file);
    res.status(200).send({ message: "File uploaded successfully", file: req.file });
  } catch (err) {
    res.status(500).send({ message: "File upload failed", error: err.message });
  }
});

// Define the route for Flask chatbot integration
app.get("/api/chatbot", async (req, res) => {
  const userMessage = req.query.userMessage; // Get user message from query parameter

  try {
    // Make a GET request to the Flask chatbot API
    const response = await axios.get(`http://127.0.0.1:5000/get?userMessage=${encodeURIComponent(userMessage)}`);

    // Send the response from Flask back to the client (React frontend)
    res.json({ response: response.data });
  } catch (error) {
    console.error('Error calling Flask chatbot API:', error);
    res.status(500).json({ error: 'Error communicating with chatbot' });
  }
});

// Set up routes for user, authentication, and job
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
