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
}