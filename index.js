const express= require('express')
const app = express()
const db=require('./models/test')
const bodyparser=require('body-parser')
const mongoose = require('mongoose')
const urlencoded=bodyparser.urlencoded({extended:false})
app.set('view engine','ejs')

app.get('/ms',(req,res) => {
    res.render('index')

})
const url ="mongodb://localhost:27017/myapp"
mongoose.connect(url,(err)=>{
  if(err) throw err;
  console.log('connection established')
})
app.post('/ms',urlencoded,function(req,res){
    db.create({
        fname: req.body.fname,
        lname: req.body.lname,

    }).then((res,data)=>{
        if(!res){
            console.log('data is not saved')
            res.json({status:404,message:'not found'})
        }else{
            console.log('data is saved')
            res.json({status:200,message:'success'})
            console.log(data)

        }
    })
    .catch((err)=>{
            console.log(err.message)
    })
 

})

app.listen(3000)
