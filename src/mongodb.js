const mongoose = require('mongoose')

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://himnish_nt:Himmi!9740@cluster0.jloemy0.mongodb.net/loginSignup?retryWrites=true&w=majority")
.then(() => {
    console.log('connection successful');
})
.catch((e) => {
    console.log(e);
    console.log('failed connection');
})

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

const collection = new mongoose.model("collection1", LogInSchema)

module.exports = collection