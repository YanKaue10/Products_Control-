import express from "express"

import {
    getSales,
    getSaleById,
    createSale,
    finalizeSale
} from "../controllers/SaleController.js"

const router = express.Router()

router.get("/", getSales)
router.get("/:id", getSaleById)
router.post("/", createSale)
router.patch("/:id/finalize", finalizeSale)

export default router;