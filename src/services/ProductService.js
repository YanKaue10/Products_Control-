import Product from "../models/Product";

export const getProducts = async () => {
  return await Product.find();
};

export const getProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Produto não encontrado");
  }
  return product;
};

export const createProduct = async (data) => {
  return await Product.create(data);
};

export const updateProduct = async (id, data) => {
  const product = await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    throw new Error("Produto não encontrado.");
  }

  return product;
};

export const deleteProductById = async (id) => {
    const product = await Product.findByIdAndDelete(id)
    if(!product){
        throw new Error("Produto não deletado");
    }
    return product;
}
