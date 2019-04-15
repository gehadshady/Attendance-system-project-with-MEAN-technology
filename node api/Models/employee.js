let mongoose=require("mongoose");

let employeeSchema=new mongoose.Schema({
    _id:Number,
    FirstName:String,
    LastName:String,
    Email:String,
    Age:Number
})

mongoose.model("Employee",employeeSchema);