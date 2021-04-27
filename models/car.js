var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    package: {type: String, required: true},
    color: {type: String, required: true},
    year: {type: Number, default: 0},
    category: {type: String, required: true},
    mileage: {type: Number, required: true},
    price: {type: Number, required: true},
    id: {type: String, required: true},
}, {
    timestamps: true
});

module.exports = mongoose.model('Car', carSchema);

// const cars = [
//     {
//         make: 'Ford',
//         model: 'F10',
//         package: 'Base',
//         color: 'Silver',
//         year: 2010,
//         category: 'Truck',
//         mileage: 120123,
//         price: 1999900,
//         id: 'JHK290Xj',
//     },
//     {
//         make: 'Toyota',
//         model: 'Camry',
//         package: 'SE',
//         color: 'White',
//         year: 2019,
//         category: 'Sedan',
//         mileage: 3999,
//         price: 2899000,
//         id: 'fWI37la',
//     },
//     {
//         make: 'Toyota',
//         model: 'Rav4',
//         package: 'XSE',
//         color: 'Red',
//         year: 2018,
//         category: 'SUV',
//         mileage: 24001,
//         price: 22750000,
//         id: '1i3xRllc',
//     },
//     {
//         make: 'Ford',
//         model: 'Bronco',
//         package: 'Badlands',
//         color: 'Burnt Orange',
//         year: 2022,
//         category: 'SUV',
//         mileage: 1,
//         price: 4499000,
//         id: 'dku43920s',
//     },
// ];

// module.exports = {
// getAll,
// getOne
// };

// function getAll() {
//     return cars;
// }

// function getOne(id) {
//     const car = cars.filter((car) => car.id === id);
//     return car;
// }

