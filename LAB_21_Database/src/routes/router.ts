import { Router, Request, Response } from 'express';
import { ProductController } from '../controller/ProductController';

const router = Router();
const controller = new ProductController();

// Products
router.post('/products', (req: Request, res: Response) => { controller.criar(req, res); });

router.get('/products', (req: Request, res: Response) => { controller.listar(req, res); });

export default router;