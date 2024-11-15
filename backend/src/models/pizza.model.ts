import mongoose, { Schema, Document } from "mongoose";

export interface IPizza extends Document {
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

const PizzaSchema: Schema = new Schema({
    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    types: { type: [Number], required: true },
    sizes: { type: [Number], required: true },
    price: { type: Number, required: true },
    category: { type: Number, required: true },
    rating: { type: Number, required: true },
});

export default mongoose.model<IPizza>("Pizza", PizzaSchema);
