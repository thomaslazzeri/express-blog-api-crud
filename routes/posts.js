import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Restituisco la lista dei post');
});

router.get('/:id', (req, res) => {
    res.send(`Restituisco il post con id ${req.params.id}`);
});

router.delete('/:id', (req,res) => {
    res.send(`Elimino il post con id ${req.params.id}`);
});

export default router;