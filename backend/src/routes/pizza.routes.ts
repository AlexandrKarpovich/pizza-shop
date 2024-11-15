import express from "express";
import Pizza from "../models/pizza.model";

const router = express.Router();

// Получение пицц с фильтрацией и сортировкой
router.get("/pizzas", async (req, res) => {
    try {
        const { category, sortBy = "rating", order = "desc" } = req.query;

        const filter = category ? { category: Number(category) } : {};
        const sortOrder = order === "asc" ? 1 : -1;

        const pizzas = await Pizza.find(filter).sort({ [sortBy as string]: sortOrder });
        res.json(pizzas);
    } catch (error) {
        console.error("Error fetching pizzas:", error);
        res.status(500).json({ error: "Failed to fetch pizzas" });
    }
});

export default router;
