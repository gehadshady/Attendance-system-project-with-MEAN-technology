let mongoose=require("mongoose");

let AttendanceSchema=new mongoose.Schema({
   // _id:Number,
    Date:{
        type:Date,
        default:""
    },
    employee:{
        type:Number,
        ref:"Employee",
    },
    attenTime:String,
    excuteTimes:{type: Number,default:0},
    lateFalg:Boolean
})

mongoose.model("Attendance",AttendanceSchema);