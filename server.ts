import express from "express";
import { createServer as createViteServer } from "vite";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, 'proposals.json');

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Request logging middleware
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });

  // API Routes
  
  // Get all proposals (Admin only - in real app would need token, here we just trust the UI gate)
  app.get("/api/proposals", (req, res) => {
    try {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      res.json(JSON.parse(data));
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
        console.error("Missing fields in proposal:", { name, email, phoneNumber, message });
        return res.status(400).json({ success: false, message: "All fields are required" });
      }

      let currentData = [];
      try {
        if (fs.existsSync(DATA_FILE)) {
          const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
          currentData = JSON.parse(fileContent);
        }
      } catch (readError) {
        console.error("Error reading proposals file:", readError);
        // If file is corrupt, start fresh (or handle differently in prod)
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

      console.log("Proposal saved successfully:", newEntry.id);
      res.json({ success: true, message: "Proposal submitted successfully", data: newEntry });
    } catch (error) {
      console.error("Error saving proposal:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Login endpoint
  app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    console.log("Login attempt:", { username, password }); // Debug log
    if (username === "agency_grothview" && password === "grothview@@5656") {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });

  // API 404 Handler - Prevent falling through to Vite
  app.use("/api/*", (req, res) => {
    console.log(`404 API Request: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ success: false, message: "API endpoint not found" });
  });

  // Global Error Handler
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error("Unhandled Express error:", err);
    if (!res.headersSent) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving (if built)
    app.use(express.static(path.join(__dirname, 'dist')));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
