import * as productService from "../services/ProductService.js";

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).json({
      message: "Produto criado com sucesso.",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);

    return res.status(200).json({
      message: "Produto atualizado com sucesso.",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await productService.deleteProductById(req.params.id);

    return res.status(200).json({
      message: "Produto deletado com sucesso.",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
