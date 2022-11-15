const mongoose= require('mongoose')
const Schema=mongoose.Schema;

const newModel=new Schema({
    fname: {
        type: String,
        required: true
    },
    lname:{
        type:String,
        required:true

    }
})
module.exports=mongoose.model('test', newModel)