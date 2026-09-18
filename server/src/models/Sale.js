import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    items: [
      {
        produto: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        nomeProduto: {
          type: String,
          required: true,
          trim: true,
        },
        quantidade: {
          type: Number,
          required: true,
          min: 1,
        },
        precoUnitario: {
          type: Number,
          required: true,
          min: 0,
        },
        subtotal: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
      min: 0,
    },
    formaPagamento: {
      type: String,
      enum: ["dinheiro", "pix", "cartao"],
      required: function() {
        return this.status === "concluida"
      },
    },
    status: {
      type: String,
      enum: ["aberta","concluida", "cancelada"],
      default: "aberta",
    },
    observacao: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Sale", saleSchema);
