const mongoose = require('mongoose');

const pass = 'mongodb+srv://lguijarror:Dalmatagea5.@cluster0.txhcqes.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectMongo = async () => {
    try {
        const con = await mongoose.connect(pass);
        console.log('INFO: Conexión a BD correcta:', con.connection.name)
    } catch (error) {
        console.log('ERROR: (f connectMongo) ->', error.message);
    }
}

module.exports = {connectMongo};