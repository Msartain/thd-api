const express = require('express');
var mongoose = require('mongoose');
var carsRouter = require('../routes/api'); 
const request = require("supertest"); 
const app = express();
require('../config/database');
app.use('/cars', carsRouter); 

// Mock db so I don't have to hit the endpoint every test.

// jest.mock("../config/database", () => [
//         {
//             make: 'Ford',
//             model: 'F10',
//             package: 'Base',
//             color: 'Silver',
//             year: 2010,
//             category: 'Truck',
//             mileage: 120123,
//             price: 1999900,
//             id: 'JHK290Xj',
//         },
//         {
//             make: 'Toyota',
//             model: 'Camry',
//             package: 'SE',
//             color: 'White',
//             year: 2019,
//             category: 'Sedan',
//             mileage: 3999,
//             price: 2899000,
//             id: 'fWI37la',
//         },
//     ]);

// let firstCar;

afterAll(async () => {
    await mongoose.connection.close();
});

describe("testing routes", () => {
    it("GET /cars", async () => {
        const { body } = await request(app).get("/cars"); 
        expect(body[0].make).toMatch(/Ford/);
    });

    it("GET /cars/{id}", async () => {
        const carObj = {
            year: 2019,
            _id: '608770e495bacc91413d172e',
            make: 'Toyota',
            model: 'Camry',
            package: 'SE',
            color: 'White',
            category: 'Sedan',
            mileage: 3999,
            price: 2899000,
            id: 'fWI37la',
            createdAt: '2021-04-27T02:03:16.123Z',
            updatedAt: '2021-04-27T02:03:16.123Z',
            __v: 0
            };

        const id = 'fWI37la';
        const { body } = await request(app).get(`/cars/${id}`);
        console.log(body);
        expect(body).toEqual(carObj);
    })
});

describe("Test a 404", () => {
    test("It should respond with a 404 status", async () => {
        const response = await request(app).get("/nowhere");
        expect(response.statusCode).toBe(404);
    });
});
