const path = require('path');

module.exports = (app) => {
    app.get('/', (req, res) => {
        console.log('Angular Homepage');
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
}