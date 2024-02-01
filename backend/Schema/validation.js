const mongoose = require("mongoose")
const {Schema} = mongoose

const validationFood = new Schema({
    eggs:{
        type:Number,
        min: [4,"Must be at least 4, got {VALUE}"],
        max: 12
    },
    drinks:{
        type:String,
        enum:{
            value:["coffee","geeen tea"],
            message:'{VALUE} is not avilable'
        }
    },
    
})
const validation_model = mongoose.model("food",validationFood)
const newFood = new validation_model({
    eggs:8,
    drinks:"coffee"
})

