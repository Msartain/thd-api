const cars = [
    {
        make: 'Ford',
        model: 'F10',
        package: 'Base',
        color: 'Silver',
        year: 2010,
        category: 'Truck',
        mileage: 120123,
        price: 1999900,
        id: 'JHK290Xj',
    },
    {
        make: 'Toyota',
        model: 'Camry',
        package: 'SE',
        color: 'White',
        year: 2019,
        category: 'Sedan',
        mileage: 3999,
        price: 2899000,
        id: 'fWI37la',
    },
    {
        make: 'Toyota',
        model: 'Rav4',
        package: 'XSE',
        color: 'Red',
        year: 2018,
        category: 'SUV',
        mileage: 24001,
        price: 22750000,
        id: '1i3xRllc',
    },
    {
        make: 'Ford',
        model: 'Bronco',
        package: 'Badlands',
        color: 'Burnt Orange',
        year: 2022,
        category: 'SUV',
        mileage: 1,
        price: 4499000,
        id: 'dku43920s',
    },
];

module.exports = {
getAll,
getOne
};

function getAll() {
    return cars;
}

function getOne(id) {
    const car = cars.filter((car) => car.id === id);
    return car;
}

