import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import ProductForm from "../pages/ProductForm";
import CategoryForm from "../pages/CategoryForm";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="produtos" element={<Products />} />
                    <Route path="categorias" element={<Categories />} />
                    <Route path="produtos/novo" element={<ProductForm />} />
                    <Route path="categorias/nova" element={<CategoryForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;