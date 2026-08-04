import mongoose from "mongoose";

const categorySchema = new mongoose.Schema (
    {
        nome:{
            type: String,
            required: true,
            trim: true,
             unique: true,
            maxlength: 100
        },
        descricao: {
            type: String,
            trim: true,
            maxlength: 100
        }
    },
    {
        timestamps: true
    }
)  

export default mongoose.model("Category", categorySchema)