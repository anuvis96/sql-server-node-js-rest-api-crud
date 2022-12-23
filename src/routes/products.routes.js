import { Router } from "express";
import { createNewProduct, getProducts, getProductById, deleteProductById, getTotalProducts, updateProductById } from "../controllers/products.controller";

const router = Router();

router.get('/products', getProducts);

router.post('/products', createNewProduct);

router.get('/products/count', getTotalProducts);

router.get('/products/:id', getProductById);

router.put('/products/:id', updateProductById);

router.delete('/products/:id', deleteProductById);





export default router