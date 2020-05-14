const prairies = require('../controllers/prairies.js');

module.exports = function (app) {
    app.get('/', (req, res) => {
        prairies.index(req, res);
    });

    app.get('/prairies/new', (req, res) => {
        prairies.new(req, res);
    });

    app.get('/prairies/:id', (req, res) => {
        prairies.show(req, res);
    });
    app.get('/prairies/:id/edit', (req, res) => {
        prairies.edit(req, res);
    });
    
    app.post('/prairies', (req, res) => {
        prairies.create(req, res);
    });
    app.post('/prairies/:id', (req, res) => {
        prairies.update(req, res);
    });
    
    app.post('/prairies/:id/destroy', (req, res) => {
        prairies.destroy(req, res);
    });
}