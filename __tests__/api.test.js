const express = require("express");
var carsRouter = require('../routes/api'); 
const request = require("supertest"); 
const app = express();
require('../config/database');
app.use("/cars", carsRouter); //routes

describe("testing-server-routes", () => {
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
        expect(body).toEqual(carObj);
    })
});
