const cakes = require('../controllers/cakes');

module.exports = (app) => {
    app.get('/', (req, res) => {
        console.log('Angular homepage');
    });

    app.get('/cakes', (req, res) => {
        cakes.index(req, res);
    });

    app.get('/cake/:id', (req,res) => {
        cakes.show(req,res);
    })

    app.post('/cakes', (req, res) => {
        cakes.create(req, res);
    });

    app.post('/ratings', (req, res) => {
        cakes.createRating(req, res);
    });
}