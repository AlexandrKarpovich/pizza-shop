import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config";
import Pizza from "./models/pizza.model";

dotenv.config();

const pizzas = [ /* JSON с пиццами */ ];

const seedDatabase = async () => {
    try {
        await connectDB();
        await Pizza.deleteMany({});
        await Pizza.insertMany(pizzas);
        console.log("Database seeded successfully");
        process.exit();
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
};

seedDatabase();
