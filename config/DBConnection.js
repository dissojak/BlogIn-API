const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const Connection = () => {
    const mongoUri = process.env.MONGODB_URI || process.env.CONN;

    mongoose.set('strictQuery', false);

    if (!mongoUri) {
        console.log("Connection Failed: missing MONGODB_URI in environment");
        return Promise.resolve();
    }

    return mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log("Connected Successfully"))
        .catch(err => console.log("Connection Failed", err));
};

module.exports = Connection;