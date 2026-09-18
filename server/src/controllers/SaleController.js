import * as saleService from "../services/SaleService.js";

export const getSales = async (req, res) => {
  try {
    const sale = await saleService.getSale();
    return res.status(200).json(sale);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getSaleById = async (req, res) => {
  try {
    const sale = await saleService.getSaleById(req.params.id);
    return res.status(200).json(sale);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const createSale = async (req, res) => {
  try {
    const sale = await saleService.createSale(req.body);
    return res.status(201).json(sale);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const finalizeSale = async (req, res) => {
  try {
    const sale = await saleService.finalizeSale(
      req.params.id,
      req.body.formaPagamento,
    );
    return res.status(200).json({
      message: "Venda finalizada com sucesso.",
      sale,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
