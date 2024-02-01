const mongoose = require("mongoose")
const { Schema } = mongoose

const schemaPosts = new Schema({
   title: {
      type: String,
      required: true
   },
   contentTypes: {
      introduction: {
         type: String,
         required: true
      },
      mainContent:{
         type:String,
        required:true
      },
      conclusion:{
         type:String,
        required:true
      }

   },
   update: { type: Date, default: Date.now },
   vote:{
      likes:Number,
      unlikes:Number      
   }

})
const schemaComment = new Schema({
      comments:{
         type:String,
         min:15,
         max:100
      }
})
const Posts = mongoose.model("post", schemaPosts)
const Comments = mongoose.model("comment",schemaComment)
module.exports = {Posts,Comments}