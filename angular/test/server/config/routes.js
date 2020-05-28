const path = require('path');
const products = require('../controllers/products');

module.exports = (app) => {
    app.get('/', (req, res) => {
        console.log('Angular Homepage')
    });

    app.get('/api/products', (req, res) => {
        products.index(req, res);
    });

    app.get('/api/products/:id', (req, res) => {
        products.show(req, res);
    });

    app.delete('/api/products/:id', (req, res) => {
        products.destroy(req, res);
    });

    app.patch('/api/products/:id', (req, res) => {
        products.update(req,res);
    });

    app.post('/api/products', (req, res) => {
        products.create(req, res);
    });

    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
}