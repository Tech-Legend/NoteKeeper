const Note=require('../models/Notemodel')
 const rootele=(req,res)=>{
    res.send('hello');
}

 const display=async(req,res)=>{
        var cursor=await Note.find()
    res.status(200).json({
        cursor
    })
    }
     
 const submit=async(req,res)=>{
    const title=req.body.title
        const content=req.body.content
        const newNote=new Note({
            title,
            content
        })
        newNote.save()
        res.status(200).json({"status":"success"})     
}        

module.exports=usercontroller={
    rootele,
    display,
    submit
}
