const prairies = require('../controllers/prairies');

module.exports = (app) => {
    app.get('/', (req, res) => {
        console.log('Angular homepage')
    })

    app.get('/prairies', (req, res) => {
        prairies.index(req, res);
    })

    app.get('/prairies/:id', (req, res) => {
        prairies.show(req, res);
    })

    app.get('/prairies/:id/destroy', (req, res) => {
        prairies.destroy(req, res);
    })

    app.post('/prairies', (req, res) => {
        prairies.create(req, res);
    })

    app.post('/prairies/:id/update', (req, res) => {
        prairies.update(req, res);
    })
}