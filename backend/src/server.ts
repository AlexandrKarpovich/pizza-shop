import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config";
import pizzaRoutes from "./routes/pizza.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", pizzaRoutes);

// Connect to DB and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
