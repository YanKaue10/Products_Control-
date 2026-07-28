require("dotenv").config()
const mongoose = require("mongoose")

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Conectado ao MongoBD com sucesso!")
    } catch (error) {
        console.log("Erro ao se conectar ao MongoDB!!", error)
        process.exit(1)
    }
}

module.exports = connectDB;