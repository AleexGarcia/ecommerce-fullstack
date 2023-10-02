import { Router } from "express";
import UserController from "./controllers/UserController";
import ProductController from "./controllers/ProductController";
import { verifyAuth } from "./midleware/verifyAuth";

export const router = Router();
const userController = new UserController();
const productController = new ProductController();

router.post('/auth/signup', userController.signup);
router.post('/auth/login', userController.login);

router.get('/products', productController.getInitialProducts);
router.get('/products/:category', productController.getProductsByCategory);
router.get('products/:id',  productController.getProductById);
router.get('products/:partialName',  productController.getProductsByPartialName);

router.post('/products', verifyAuth, productController.createProduct);
router.put('products/:id', verifyAuth, productController.updateProduct);
router.delete('products/:id', verifyAuth, productController.deleteProduct);