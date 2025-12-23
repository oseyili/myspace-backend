import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();

app.use(
  cors({
    origin: [
      "https://myspace-frontend.onrender.com",
      "https://myspace-frontend.vercel.app",
      "https://myspace-frontend-6h2wahh62-integritys-projects-d00b1864.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

app.post("/auth/login", (req, res) => {
  return res.status(401).json({
    message: "Login not yet enabled. User system pending."
  });
});

app.get("/", (req, res) => {
  res.json({ status: "myspace-backend running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
