const mongoose = require('mongoose');


// mongoose.connect('mongodb://db:27017/cars', {
mongoose.connect('mongodb://localhost/cars', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const db = mongoose.connection;

db.once('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
