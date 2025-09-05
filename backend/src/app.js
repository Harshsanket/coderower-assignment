import express from "express";
import cors from "cors";

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE"], // task 1 & 2 only require get and put
  }),
);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

import healthcheck from "./routes/healthcheck.routes.js"
app.use("/healthcheck", healthcheck)

import configs from "./routes/configs.routes.js"
app.use("/api/configurations", configs)

export default app;
