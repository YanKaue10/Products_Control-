import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
            trim: true
        },
        descricao: {
            type: String,
            trim: true
        },
        preco: {
            type: Number,
            required: true,
            min: 0
        },
         categoria: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
         },
         ativo: {
           type: Boolean,
           default: true
         }
    },
     {
            timestamps: true
        }
)

export default mongoose.model("Product", productSchema)