var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cars', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

var db = mongoose.connection;

db.once('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
