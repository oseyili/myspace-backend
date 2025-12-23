import cors from "cors";

app.use(
  cors({
    origin: [
      // Render frontend (REQUIRED)
      "https://myspace-frontend.onrender.com",

      // keep Vercel URLs if you still use them
      "https://myspace-frontend.vercel.app",
      "https://myspace-frontend-6h2wahh62-integritys-projects-d00b1864.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
