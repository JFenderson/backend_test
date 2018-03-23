import { Router } from 'express';
import booksControllers from '../controllers/booksControllers';
import Table from '../table';

let books = new Table('books');


let router = Router();

router.get('/books', (req,res,next)=>{
    books.getAll()
    .then(books=> res.json(books))
})
    

router.get('/books/:id', (req, res, next)=> {
    let id = req.params.id
    books.getOne(id)
    .then(author => res.json(author))
})

router.post('/books', (req, res, next)=> {
    books.insert({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })
    .then(id => res.json(id))
    .then(res.sendStatus(201))
})

router.put('/books/:id', (req, res, next)=> {
    books.update(req.params.id, req.body)
    .then(results => res.json(results))
    .catch((err)=>console.log(err))
})

router.delete('/books/:id', (req, res, next)=> {
    books.delete(req.params.id)
    .then(results => res.json(results))
    .then(res.sendStatus(200))
    .catch((err)=> console.log(err))
    
})

export default router;