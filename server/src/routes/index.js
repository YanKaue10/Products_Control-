import { Router } from "express";

import productRoutes from "./productRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import saleRoutes from "./SaleRoutes.js"

const router = Router();

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/sales", saleRoutes)

export default router;