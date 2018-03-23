import express from 'express';
import apiRouter from './routes/api';

let app = express();

app.use(express.json())

app.use('/', apiRouter)

app.listen(3000, () => {
    console.log('Application listening on port 3000');
});

