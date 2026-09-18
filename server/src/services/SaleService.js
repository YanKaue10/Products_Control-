import Sale from "../models/Sale.js";
import Product from "../models/Product.js";

export const getSale = async () => {
  return await Sale.find();
};

export const getSaleById = async (id) => {
  const sale = await Sale.findById(id);

  if (!sale) {
    throw new Error("Venda Não encontrada");
  }
  return sale;
};

export const createSale = async (data) => {
  const { items, observacao } = data;

  if (!items || items.length === 0) {
    throw new Error("A venda deve possuir ao menos um item.");
  }
  const saleItems = [];

  for (const item of items) {
    const product = await Product.findById(item.produto);

    if (!product) {
      throw new Error("Produto não encontrado.");
    }
    if (!product.ativo) {
      throw new Error(`O produto ${product.nome} está inativo.`);
    }
    const subtotal = product.preco * item.quantidade;

    saleItems.push({
      produto: product._id,
      nomeProduto: product.nome,
      quantidade: item.quantidade,
      precoUnitario: product.preco,
      subtotal,
    });
  }

  const total = saleItems.reduce((sum, item) => sum + item.subtotal, 0);

  return await Sale.create({
    items: saleItems,
    total,
    observacao,
    status: "aberta",
  });
};

export const finalizeSale = async (id, formaPagamento) => {
    
    const sale = await Sale.findById(id)

    if (!sale) {
        throw new Error("Venda não encontrada.");
    } else if (sale.status !== "aberta"){
        throw new Error("A venda não pode ser finalizada..");
    }

    sale.formaPagamento = formaPagamento
    sale.status = "concluida"

    return await sale.save()
}


