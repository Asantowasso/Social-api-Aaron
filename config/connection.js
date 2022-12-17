//Create a connection to the local database

const { connect, connection } = require ('mongoose');

connect ('mongodb://locathost/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = connection;