import express from "express";
import { createServer as createViteServer } from "vite";
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
    const PORT = 3000;

    console.log("Starting server initialization...");

    // Middleware
    app.use(cors());
    app.use(express.json({ limit: '10mb' }));
    app.use(express.urlencoded({ extended: true }));

    // Request logging
    app.use((req, res, next) => {
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
      next();
    });

    // API Routes - Defined BEFORE Vite middleware
    
    app.get("/api/health", (req, res) => {
      res.json({ status: "ok", timestamp: new Date().toISOString() });
    });
    
    // Vite middleware setup
    if (process.env.NODE_ENV !== "production") {
      console.log("Setting up Vite middleware...");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } else {
      console.log("Serving static files from dist...");
      app.use(express.static(path.join(ROOT_DIR, 'dist')));
    }

    // Global Error Handler
    app.use((err, req, res, next) => {
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
    setInterval(() => { console.log("Server process alive (failed start state)"); }, 60000);
  }
}

startServer();
