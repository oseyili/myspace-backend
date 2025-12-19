import express from "express";
import cors from "cors";
import roomsRouter from "./src/routes/rooms.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["https://myspace-frontend.vercel.app"],
  })
);

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/api/rooms", roomsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`MySpace backend running on port ${PORT}`));
