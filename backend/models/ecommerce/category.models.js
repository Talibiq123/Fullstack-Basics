import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: String,
    required: true
}, {timestamps: true})

export const Category  = mongoose.model("Category", categorySchema)