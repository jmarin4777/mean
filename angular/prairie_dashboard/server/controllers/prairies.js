const {Prairie} = require('../models/prairie');

module.exports = {
    index: (req, res) => {
        Prairie.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                console.log(err);
            })
    }, 
    
    show: (req, res) => {
        Prairie.findOne({_id: req.params.id})
            .then(data => {
                if(data != null){
                    res.json(data);
                } else{
                    console.log("match not found");
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}