const Car = require('../../models/cars');

module.exports = {
    index,
    show
};

// function show(req,res){
//     Car.findById(req.params.id, function(err, car){
//         res.status(200).json(car);
//     });
// }

// function index(req, res){
//     Car.find({}, function(err, car){
//         res.status(200).json(car);
//     });
// }

function show(req,res){
    const car = Car.getOne(req.params.id)
    res.status(200).json(car);
}

function index(req, res) {
    const cars = Car.getAll();
    res.status(200).json(cars);
}
