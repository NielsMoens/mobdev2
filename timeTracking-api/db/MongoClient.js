const mongoose = require('mongoose');

class MongoClient {
    constructor(){

    }
    connect() {
        mongoose.connect(process.env.MONGO_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            // we're connected!
            console.log("connected");
            db.close();
        });
        this.db = db;
    }
    disconnect() {
        this.db.close();
    }
}

module.exports = MongoClient;

