module.exports = function(app){
    app.get('/', (req, res) => {
        console.log('new connection');
        // res.send('hello from routes');
    });
    
    app.get('/tasks', (req, res) => {
        console.log('someone asked for tasks');
        res.json([{name: 'dishes'}, {name: 'mopping'}]);
    })
}