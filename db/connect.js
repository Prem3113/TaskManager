const mongoose = require('mongoose')

//const connectString = 'mongodb+srv://PremSai:mydatabase@nodejsprojects.gc0ml.mongodb.net/taskmanager?retryWrites=true&w=majority'

const connectDB = (url) => {
 return mongoose.connect(url,{
    useNewUrlParser: true,
   //useCreateIndex: true,
    //useFindAndModify: true,
    useUnifiedTopology: true,
})
}

module.exports = connectDB