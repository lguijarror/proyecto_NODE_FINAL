const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log('INFO: Conexión a BD correcta:', con.connection.name)
    } catch (error) {
        console.log('ERROR: (f connectMongo) ->', error.message);
    }
}

module.exports = {connectMongo};