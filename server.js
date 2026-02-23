import express from "express";
import fs from 'fs';
import path from 'path';
import cors from 'cors';

// Use process.cwd() for reliable path resolution in container
const ROOT_DIR = process.cwd();
// Use /tmp for writable storage in container environments
const DATA_FILE = '/tmp/proposals.json';

// Ensure data file exists (non-blocking, safe)
try {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
    console.log("Created proposals.json at", DATA_FILE);
  }
} catch (err) {
  console.error("Failed to check/create proposals.json:", err);
}

// Prevent crash on uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION:', reason);
});

async function startServer() {
  try {
    const app = express();
    // Run API server on 3001 to avoid conflict with Vite on 3000
    const PORT = 3001;

    console.log("Starting API server initialization...");

    // Middleware
    app.use(cors());
    app.options('*', cors()); // Enable pre-flight for all routes
    app.use(express.json({ limit: '10mb' })); // Increase limit
    app.use(express.urlencoded({ extended: true }));

    // Request logging - Log EVERY request hitting the server
    app.use((req, res, next) => {
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
      next();
    });

    // API Routes
    
    // Health check
    app.get("/api/health", (req, res) => {
      res.json({ status: "ok", timestamp: new Date().toISOString() });
    });
    
    // Get all proposals
    app.get("/api/proposals", (req, res) => {
      try {
        if (fs.existsSync(DATA_FILE)) {
          const data = fs.readFileSync(DATA_FILE, 'utf8');
          res.json(JSON.parse(data));
        } else {
          res.json([]);
        }
      } catch (error) {
        console.error("Error reading proposals:", error);
        res.status(500).json({ error: "Failed to read data" });
      }
    });

    // Submit a proposal
    app.post("/api/proposals", (req, res) => {
      console.log("Received proposal submission:", req.body);
      try {
        const { name, email, phoneNumber, message } = req.body;
        
        if (!name || !email || !phoneNumber || !message) {
          console.error("Missing fields:", { name, email, phoneNumber, message });
          return res.status(400).json({ success: false, message: "All fields are required" });
        }

        let currentData = [];
        try {
          if (fs.existsSync(DATA_FILE)) {
            const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
            currentData = JSON.parse(fileContent);
            if (!Array.isArray(currentData)) currentData = [];
          }
        } catch (readError) {
          console.error("Error reading proposals file:", readError);
          currentData = [];
        }
        
        const newEntry = {
          id: Date.now(),
          name,
          email,
          phoneNumber,
          message,
          timestamp: new Date().toISOString(),
        };

        currentData.push(newEntry);
        fs.writeFileSync(DATA_FILE, JSON.stringify(currentData, null, 2));

        console.log("Proposal saved:", newEntry.id);
        res.json({ success: true, message: "Proposal submitted successfully", data: newEntry });
      } catch (error) {
        console.error("Error saving proposal:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    });

    // Login endpoint
    app.post("/api/login", (req, res) => {
      const { username, password } = req.body;
      console.log("Login attempt:", { username, password }); 
      if (username === "agency_grothview" && password === "grothview@@5656") {
        res.json({ success: true });
      } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    });

    // API 404 Handler
    app.use("/api/*", (req, res) => {
      console.log(`404 API Request: ${req.method} ${req.originalUrl}`);
      res.status(404).json({ success: false, message: "API endpoint not found" });
    });

    // Global Error Handler
    app.use((err, req, res, next) => {
      console.error("Unhandled Express error:", err);
      if (!res.headersSent) {
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    });

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`API Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    // Keep process alive to see logs
    setInterval(() => {
      console.log("Server process alive (failed start state)");
    }, 60000);
  }
}

startServer();
