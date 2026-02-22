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

  // API Routes
  
  // Get all proposals (Admin only - in real app would need token, here we just trust the UI gate)
  app.get("/api/proposals", (req, res) => {
    try {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      res.json(JSON.parse(data));
    } catch (error) {
      res.status(500).json({ error: "Failed to read data" });
    }
  });

  // Submit a proposal
  app.post("/api/proposals", (req, res) => {
    try {
      const { name, email, phoneNumber, message } = req.body;
      
      if (!name || !email || !phoneNumber || !message) {
        return res.status(400).json({ success: false, message: "All fields are required" });
      }

      const currentData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
      
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

      res.json({ success: true, message: "Proposal submitted successfully", data: newEntry });
    } catch (error) {
      console.error("Error saving proposal:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Login endpoint
  app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "agency_grothview" && password === "grothview@@5656") {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
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
