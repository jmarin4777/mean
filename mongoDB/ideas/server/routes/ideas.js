const express = require('express');
const router = express.Router();
const ideas = require('../controllers/ideas.js');

router.get('/', (req, res) => {
    ideas.index(req, res);
});

router.post('/', (req, res) => {
    ideas.create(req, res);
});

router.get('/:ideaId', (req, res) => {
    ideas.show(req, res);
});

router.delete('/:ideaId', (req, res) => {
    ideas.destroy(req, res);
});

router.patch('/:ideaId', (req, res) => {
    ideas.update(req, res);
});

module.exports = router;