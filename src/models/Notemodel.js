
const mongoose=require('mongoose')
const noteschema={
    title:String,
    content:String
}
const Note=mongoose.model("Notes",noteschema)

module.exports=Note;