import express from "express";
import { createServer as createViteServer } from "vite";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Use process.cwd() for reliable path resolution in container
const ROOT_DIR = process.cwd();
const DATA_FILE = path.join(ROOT_DIR, 'proposals.json');

// Ensure data file exists (non-blocking, safe)
try {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
    console.log("Created proposals.json at", DATA_FILE);
  }
} catch (err) {
  console.error("Failed to check/create proposals.json:", err);
}

async function startServer() {
  try {
    const app = express();
    const PORT = 3000;

    console.log("Starting server initialization...");

    // Built-in middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Request logging
    app.use((req, res, next) => {
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
      next();
    });

    // API Router
    const apiRouter = express.Router();

    // Health check
    apiRouter.get("/health", (req, res) => {
      res.json({ status: "ok", timestamp: new Date().toISOString() });
    });
    
    // Get all proposals
    apiRouter.get("/proposals", (req, res) => {
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
    apiRouter.post("/proposals", (req, res) => {
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
    apiRouter.post("/login", (req, res) => {
      const { username, password } = req.body;
      console.log("Login attempt:", { username, password }); 
      if (username === "agency_grothview" && password === "grothview@@5656") {
        res.json({ success: true });
      } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    });

    // Mount API Router
    app.use("/api", apiRouter);

    // API 404 Handler
    app.use("/api/*", (req, res) => {
      console.log(`404 API Request: ${req.method} ${req.originalUrl}`);
      res.status(404).json({ success: false, message: "API endpoint not found" });
    });

    // Vite middleware
    if (process.env.NODE_ENV !== "production") {
      console.log("Setting up Vite middleware...");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } else {
      app.use(express.static(path.join(ROOT_DIR, 'dist')));
    }

    // Global Error Handler
    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.error("Unhandled Express error:", err);
      if (!res.headersSent) {
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    });

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    // Do not exit, just log. Exiting kills the container.
  }
}

// Handle unhandled rejections to prevent crash
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

startServer();
