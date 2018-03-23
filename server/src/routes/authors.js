import { Router } from 'express';
import authorsControllers from '../controllers/authorsControllers';
import Table from '../table';

let authors = new Table('authors');


let router = Router();

router.get('/authors', (req,res,next)=>{
    authors.getAll()
    .then(authors=> res.json(authors))
})

router.get('/authors/:id', (req, res, next)=> {
    let id = req.params.id
    authors.getOne(id)
    .then(author => res.json(author))
})

router.post('/authors', (req, res, next)=> {
    authors.insert({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })
    .then(id => res.json(id))
    .then(res.sendStatus(201))
})

router.put('/authors/:id', (req, res, next)=> {
    authors.update(req.params.id, req.body)
    .then(results => res.json(results))
    .catch((err)=>console.log(err))
})

router.delete('/authors/:id', (req, res, next)=> {
    authors.delete(req.params.id)
    .then(results => res.json(results))
    .then(res.sendStatus(200))
    .catch((err)=> console.log(err))
    
})

export default router;