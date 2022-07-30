import { Router } from 'express';
import ProductsController from '../controllers/product.controller';

const productRouter = Router();

const productsController = new ProductsController();

productRouter.get('/', productsController.getAll);

export default productRouter;