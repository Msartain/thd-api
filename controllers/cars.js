const Car = require('../models/car');

module.exports = {
    index,
    show
};

function show(req,res){
    try {
        Car.findOne({id: req.params.id}, (err, car) => {
            res.status(200).json(car);
        })
    } catch (error) {
        res.status(500).send('An unknown error occurred.');
    }
    
}

function index(req, res){
    try {
        Car.find({}, (err, cars) => {
            res.status(200).json(cars);
        })
    } catch (error) {
        res.status(500).send('An unknown error occurred.');
    }
}

// function show(req,res){
//     const car = Car.getOne(req.params.id)
//     res.status(200).json(car);
// }

// function index(req, res) {
//     const cars = Car.getAll();
//     res.status(200).json(cars);
// }
