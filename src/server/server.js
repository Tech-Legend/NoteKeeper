const express=require('express')
const bodyparser=require('body-parser')
var mongoose=require('mongoose')
const cors=require('cors');
const app=express()
app.use(bodyparser.json())
const usercontroller=require('../controllers/userControllers')

app.use(cors())

app.use(express.json())

app.use(bodyparser.urlencoded({
    extended:true
}))
mongoose.connect("mongodb://0.0.0.0:27017/Trials",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection
db.on('error',()=>console.log('connection error'))
db.once('open',()=>{
    console.log("connected to db")
})

app.get('/',usercontroller.rootele);
app.get('/display',usercontroller.display)
app.post('/submit',usercontroller.submit);

app.listen(7000,()=>{
    console.log('server started at 7000')
})