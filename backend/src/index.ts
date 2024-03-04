import http from "http";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Express Connection
export const app = express();

// Database Connection
mongoose.connect(process.env.MONGODB_URI as string);
export const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MongoDB Connected");
});

// Node Server Connection
export const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify({ data: "Server started!" }));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
