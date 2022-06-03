const express = require('express')
const connectDB = require('./db/connect')
const app = express();
const task = require('./routes/task');
const notfound = require('./middleware/not-found')
const errorhandler = require('./middleware/errorhandler')

require('dotenv').config()
app.use(express.json());
app.get('/', (req,res) => {
    res.send("hello")
});
app.use('/api/v1/tasks',task);
app.use(notfound)
app.use(errorhandler)
const start = async () =>{
    try {
    await connectDB(process.env.MONGO_URI)
        app.listen(5000, console.log(`server is running....`))
    } catch (error) {
        //app.listen(5000, console.log(`sever is running....`))
        console.log(error)
    }
}

start()

