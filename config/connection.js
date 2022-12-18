//Create a connection to the local database

const { connect, connection } = require ('mongoose');

//Creating a connection to 

const connectionString = 
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Socialdb';

connect (connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;