import { Router } from 'express';
import authorsRouter from './authors';
import booksRouter from './books';


let router = Router();

router.use('/api', authorsRouter);
router.use('/api', booksRouter);


export default router;
