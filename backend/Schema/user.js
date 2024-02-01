const mongoose = require("mongoose")
const { Schema } = mongoose


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Schema.Types.Mixed,
        required: true
    } ,
    admin:{
        type:Boolean,
        default:false
    }
},{autoCreate:false,autoIndex:false}) // to create user mannualy we should disable autoCreate and autoIndex 
const User = mongoose.model("User",userSchema);
const Redirect_user = mongoose.model("RedirectUser",userSchema)
module.exports= {User, Redirect_user}

