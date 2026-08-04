import * as categoryService from "../services/CategoryService.js"

export const getCategories = async (req, res) => {
    try {
        const category = await categoryService.getCategories()
        return res.status(200).json(category)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
} 

export const createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body)
         return res.status(201).json({
      message: "Categoria criado com sucesso.",
      product,
    });
    } catch (error) {
         return res.status(500).json({
      message: error.message,
    });
    }
}

export const getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
      const category = await categoryService.updateCategory(req.params.id, req.body);
      
    return res.status(200).json({
      message: "Categoria atualizada com sucesso.",
      category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await categoryService.deleteCategory(req.params.id);

    return res.status(200).json({
      message: "Categoria deletado com sucesso.",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};