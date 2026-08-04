import Category from "../models/Category.js";

export const getCategories = async () => {
    return Category.find()
}

export const createCategory = async(data) => {
    return await Category.create(data)
}

export const getCategorybyId = async (id) => {
    const category = await Category.findById(id)

    if (!category) {
        throw new Error("Categoria não encontrada.");
    }

    return category;
};

export const updateCategory = async (id, data) => {
    const category = await Category.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    })
    if(!category) {
        throw new Error("Categoria não encontrada")
    }
    return category;
}

export const deleteCategory = async(id) =>  {
    const category = await Category.findByIdAndDelete(id)
    if(!category) {
        throw new Error("Categoria não encontrada")
    }
    return category
}